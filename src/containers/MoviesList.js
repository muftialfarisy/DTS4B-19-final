import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Box, Button } from "@mui/material";

import "../List.css";
import Slider from "react-slick";
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "@mui/material";
import useMovieStore, {
  selectTopFetchMovies,
  selectMovies,
  selectActionMovies,
  selectActionFetchMovies,
  selectComedyMovies,
  selectComedyFetchMovies,
  selectMoviesReady,
  selectSortMovies,
} from "../store/movie";
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
const MoviesList = () => {
  const movies = useMovieStore(selectMovies);
  const actionmovies = useMovieStore(selectActionMovies);
  const comedymovies = useMovieStore(selectComedyMovies);
  const moviesReady = useMovieStore(selectMoviesReady);
  const sortMovies = useMovieStore(selectSortMovies);
  const fetchTopMovies = useMovieStore(selectTopFetchMovies);
  const fetchActionMovies = useMovieStore(selectActionFetchMovies);
  const fetchComedyMovies = useMovieStore(selectComedyFetchMovies);
  const [queryParams, setQueryParams] = useSearchParams();
  useEffect(() => {
    fetchTopMovies();
  }, []);
  useEffect(() => {
    fetchActionMovies();
  }, []);
  useEffect(() => {
    fetchComedyMovies();
  }, []);
  useEffect(() => {
    if (!moviesReady) return;

    sortMovies(queryParams.get("sort"));
  }, [queryParams, moviesReady]);
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
              <h2 className="text-white text-left">Top Movies</h2>
            </div>
          </MDBCol>
          <MDBCol size="md">
            <div class="d-flex justify-content-end align-items-end">
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
        {movies.map((movie) => (
          <MDBCol className="px-3 rounded" key={movie.title}>
            <div className="bg-image hover-overlay rounded">
              <img
                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                className="img-fluid"
                alt={movie.title}
              />

              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="d-flex justify-content-center align-items-center  h-50">
                    {/* <Link href="/detail"> */}
                    <Link href={`/movies/${movie.id}`}>
                      <PlayCircleOutlineIcon
                        sx={{ fontSize: "100px", color: "#00e676" }}
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-end h-50 ">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-2">
                        <h2 className="text-white ">{movie.title}</h2>
                      </div>
                      <div className="p-2">
                        <h5 className="text-white">{movie.release_date}</h5>
                      </div>
                      <div className="mt-auto p-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={movie.vote_average / 2}
                          precision={0.1}
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
                  {/* <h3>{tseries.judul}</h3>
                  <h4>{tseries.deskripsi}</h4> */}
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
              <h2 className="text-white text-left">Movies Actions</h2>
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
        {actionmovies.map((action) => (
          <MDBCol className="px-3 rounded" key={action.title}>
            <div className="bg-image hover-overlay rounded">
              <img
                src={`${BASE_IMAGE_URL}${action.poster_path}`}
                className="img-fluid"
                alt={action.title}
              />

              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="d-flex justify-content-center align-items-center  h-50">
                    <div>
                      {/* <Link href="/detail"> */}
                      <Link href={`/movies/${action.id}`}>
                        <PlayCircleOutlineIcon
                          sx={{ fontSize: "100px", color: "#00e676" }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end h-50 ">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-2">
                        <h2 className="text-white ">{action.title}</h2>
                      </div>
                      <div className="p-2">
                        <h5 className="text-white">{action.release_date}</h5>
                      </div>
                      <div className="mt-auto p-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={action.vote_average / 2}
                          precision={0.1}
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
              <h2 className="text-white text-left">Movies Comedy</h2>
            </div>
          </MDBCol>
          <MDBCol size="md">
            <div class="d-flex justify-content-end align-items-end">
              <Link>See All</Link>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <Slider className="mx-4" {...settings}>
        {comedymovies.map((comedy) => (
          <MDBCol className="px-3 rounded" key={comedy.title}>
            <div className="bg-image hover-overlay rounded">
              <img
                src={`${BASE_IMAGE_URL}${comedy.poster_path}`}
                className="img-fluid"
                alt={comedy.title}
              />

              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="d-flex justify-content-center align-items-center  h-50">
                    <div>
                      {/* <Link href="/detail"> */}
                      <Link href={`/movies/${comedy.id}`}>
                        <PlayCircleOutlineIcon
                          sx={{ fontSize: "100px", color: "#00e676" }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end h-50 ">
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-2">
                        <h2 className="text-white ">{comedy.title}</h2>
                      </div>
                      <div className="p-2">
                        <h5 className="text-white">{comedy.release_date}</h5>
                      </div>
                      <div className="mt-auto p-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={comedy.vote_average / 2}
                          precision={0.1}
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

export default MoviesList;
