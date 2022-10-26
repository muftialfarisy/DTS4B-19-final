import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "@mui/material";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Button } from "@mui/material";

const TopListMovies = () => {
  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    // dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
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
  const slides = [
    {
      title: "First item",
      description: "Lorem ipsum",
      image: "https://s18.postimg.cc/9vhgup22x/img1.jpg",
    },
    {
      title: "Second item",
      description: "Lorem ipsum",
      image: "https://s18.postimg.cc/vunvhvvrt/img2.jpg",
    },
    {
      title: "third item",
      description: "Lorem ipsum",
      image: "https://s18.postimg.cc/vunvhvvrt/img2.jpg",
    },
    {
      title: "four item",
      description: "Lorem ipsum",
      image: "https://s18.postimg.cc/vunvhvvrt/img2.jpg",
    },
  ];
  return (
    <div>
      <MDBRow>
        <MDBCol className="text-start p-5" md="8" style={{ color: "white" }}>
          <h3>Top Movies</h3>
        </MDBCol>
      </MDBRow>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "60dp",
        }}
      >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <MDBCard
                background="dark"
                className="text-white mb-3"
                alignment="center"
                style={{ maxWidth: "700px" }}
              >
                <MDBCardImage
                  overlay
                  src={slide.image}
                  alt="..."
                  style={{ maxHeight: "300px" }}
                />
                <MDBCardOverlay>
                  <MDBCardTitle>
                    <div
                      className="mask"
                      style={{
                        background:
                          "linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(263, 80%, 20%, 0.5))",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-end  h-100">
                        <div className="d-flex align-items-start flex-column">
                          <div className="p-2">
                            <h2 className="text-white ">{slide.title}</h2>
                          </div>
                          <div className="p-2">
                            <h5 className="text-white">3 mins ago</h5>
                          </div>
                          <div className="mt-auto p-2">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center h-100">
                          <Link href="/detail">
                            <PlayCircleOutlineIcon
                              sx={{ fontSize: "100px", color: "#00e676" }}
                            />
                          </Link>
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
                  </MDBCardTitle>
                </MDBCardOverlay>
              </MDBCard>
            </div>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default TopListMovies;
