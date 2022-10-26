import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../List.css";
import Slider from "react-slick";
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "@mui/material";
import useMovieStore, {
  selectTopFetchSeries,
  selectSeries,
  selectActionSeries,
  selectActionFetchSeries,
  selectComedySeries,
  selectComedyFetchSeries,
  selectSeriesReady,
  selectSortSeries,
} from "../store/movie";
import { Box, Button } from "@mui/material";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const SeriesList = () => {
  const series = useMovieStore(selectSeries);
  const actionSeries = useMovieStore(selectActionSeries);
  const comedySeries = useMovieStore(selectComedySeries);
  const fetchTopSeries = useMovieStore(selectTopFetchSeries);
  const fetchActionSeries = useMovieStore(selectActionFetchSeries);
  const fetchComedySeries = useMovieStore(selectComedyFetchSeries);
  const [queryParams, setQueryParams] = useSearchParams();
  const sortSeries = useMovieStore(selectSortSeries);
  const seriesReady = useMovieStore(selectSeriesReady);

  useEffect(() => {
    fetchTopSeries();
  }, []);
  useEffect(() => {
    fetchActionSeries();
  }, []);
  useEffect(() => {
    fetchComedySeries();
  }, []);
  useEffect(() => {
    if (!seriesReady) return;

    sortSeries(queryParams.get("sort"));
  }, [queryParams, seriesReady]);
  const setSortParam = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
  };
  return (
    <div className="list">
      <div>
        <MDBRow className="mx-10">
          <MDBCol size="md">
            <div class="d-flex justify-content-start">
              <h2 className="text-white text-left">Top Series</h2>
            </div>
          </MDBCol>
          <MDBCol size="md">
            <div className="d-flex justify-content-end align-items-end">
              {/* <Link>See All</Link> */}
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                Sort by Rating
                <Button
                  variant="contained"
                  sx={{ ml: 2 }}
                  onClick={() => setSortParam("asc")}
                >
                  Asc
                </Button>
                <Button
                  variant="contained"
                  sx={{ ml: 2, mr: 2 }}
                  onClick={() => setSortParam("desc")}
                >
                  Desc
                </Button>
              </Box>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      {/* <MDBRow className="row-cols-1 row-cols-md-3 g-4"> */}
      <Slider className="mx-4" {...settings}>
        {series.map((tseries) => (
          <MDBCol className="px-3 rounded" key={tseries.id}>
            <div className="bg-image hover-overlay rounded">
              <img
                src={`${BASE_IMAGE_URL}${tseries.poster_path}`}
                className="img-fluid"
                alt={tseries.name}
              />

              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="d-flex justify-content-center align-items-center  h-50">
                    <div>
                      <Link href={`/series/${tseries.id}`}>
                        <PlayCircleOutlineIcon
                          sx={{ fontSize: "100px", color: "#00e676" }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end h-50 ">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-2">
                        <h2 className="text-white ">{tseries.name}</h2>
                      </div>
                      <div className="p-2">
                        <h5 className="text-white">{tseries.first_air_date}</h5>
                      </div>
                      <div className="mt-auto p-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={tseries.vote_average / 2}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center flex-column"
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <div className="mr-5 p-2">
                        <Fab color="primary" aria-label="add">
                          <FavoriteBorderIcon />
                        </Fab>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </MDBCol>
        ))}
      </Slider>
      <div style={{ marginTop: "50px" }}>
        <MDBRow className="mx-10">
          <MDBCol size="md">
            <div class="d-flex justify-content-start">
              <h2 className="text-white text-left">Drama Actions</h2>
            </div>
          </MDBCol>
          <MDBCol size="md">
            <div class="d-flex justify-content-end align-items-end">
              {/* <Link>See All</Link> */}
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <Slider className="mx-4" {...settings}>
        {actionSeries.map((aseries) => (
          <MDBCol className="px-3 rounded" key={aseries.name}>
            <div className="bg-image hover-overlay rounded">
              <img
                src={`${BASE_IMAGE_URL}${aseries.poster_path}`}
                className="img-fluid"
                alt="asries.name"
              />

              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="d-flex justify-content-center align-items-center  h-50">
                    <div>
                      <Link href={`/series/${aseries.id}`}>
                        <PlayCircleOutlineIcon
                          sx={{ fontSize: "100px", color: "#00e676" }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end h-50 ">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-2">
                        <h2 className="text-white ">{aseries.name}</h2>
                      </div>
                      <div className="p-2">
                        <h5 className="text-white">{aseries.first_air_date}</h5>
                      </div>
                      <div className="mt-auto p-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={aseries.vote_average / 2}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center flex-column"
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <div className="mr-5 p-2">
                        <Fab color="primary" aria-label="add">
                          <FavoriteBorderIcon />
                        </Fab>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </MDBCol>
        ))}
      </Slider>
      <div style={{ marginTop: "50px" }}>
        <MDBRow className="mx-10">
          <MDBCol size="md">
            <div class="d-flex justify-content-start">
              <h2 className="text-white text-left">Drama Comedy</h2>
            </div>
          </MDBCol>
          <MDBCol size="md">
            <div className="d-flex justify-content-end align-items-end">
              <Link>See All</Link>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <Slider className="mx-4" {...settings}>
        {comedySeries.map((cseries) => (
          <MDBCol className="px-3 rounded" key={cseries.name}>
            <div className="bg-image hover-overlay rounded">
              <img
                src={`${BASE_IMAGE_URL}${cseries.poster_path}`}
                className="img-fluid"
                alt={cseries.name}
              />

              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="d-flex justify-content-center align-items-center  h-50">
                    <div>
                      <Link href={`/series/${cseries.id}`}>
                        <PlayCircleOutlineIcon
                          sx={{ fontSize: "100px", color: "#00e676" }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end h-50 ">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-2">
                        <h2 className="text-white ">{cseries.name}</h2>
                      </div>
                      <div className="p-2">
                        <h5 className="text-white">{cseries.first_air_date}</h5>
                      </div>
                      <div className="mt-auto p-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={cseries.vote_average / 2}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center flex-column"
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <div className="mr-5 p-2">
                        <Fab color="primary" aria-label="add">
                          <FavoriteBorderIcon />
                        </Fab>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </MDBCol>
        ))}
      </Slider>
    </div>
  );
};

export default SeriesList;
