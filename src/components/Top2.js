import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "@mui/material";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useEffect } from "react";
import useMovieStore, {
  selectNewFetchMovies,
  selectMovies,
} from "../store/movie";
const Top2 = () => {
  const movies = useMovieStore(selectMovies);
  const fetchMovies = useMovieStore(selectNewFetchMovies);
  useEffect(() => {
    fetchMovies();
  }, []);
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    // dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="list">
      <div>
        <MDBRow className="mx-10">
          <MDBCol size="md">
            <div class="d-flex justify-content-start">
              <h2 className="text-white text-left">New Movies Release</h2>
            </div>
          </MDBCol>
          <MDBCol size="md">
            <div class="d-flex justify-content-end align-items-end">
              <Link>See All</Link>
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
    </div>
  );
};

export default Top2;
