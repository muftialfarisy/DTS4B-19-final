import React, { useState } from "react";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import Tentang from "../containers/Tentang";
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import PemainList from "../containers/PemainList";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect } from "react";
import tmdb from "../api/tmdb";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const Detail = () => {
  const [seriesItem, setItems] = useState([]);
  const { id } = useParams();
  const [pemainItem, setPemainItems] = useState([]);
  const [genresSeries, setGenresSeries] = useState([]);
  const [videoSeries, setVideoSeries] = useState([]);
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  // useEffect(() => {
  //   const fetchiditem = async () => {
  //     const data = await fetch(
  //       // `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
  //       `https://api.themoviedb.org/3/tv/${id}?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US`
  //     );
  //     const itemdata = await data.json();
  //     setitems(itemdata.data.results);
  //   };

  //   fetchiditem();
  // }, [id]);
  useEffect(() => {
    const fetchMovies = async () => {
      // console.log(id);
      const fetchedMovies = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US`
      );
      // setItems();
      let sample = fetchedMovies.data;
      // console.log(sample.production_countries[0]);
      // setItems(fetchedMovies.data.results);
      // console.log(sample.name);
      setItems(sample);
      setGenresSeries(seriesItem.genres);
      // console.log(seriesItem);
    };
    fetchMovies();
  }, []);
  useEffect(() => {
    const fetchGenres = async () => {
      // console.log(id);
      const fetchedMovies = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US`
      );
      // setItems();
      let g = fetchedMovies.data.genres;
      // console.log(sample.production_countries[0]);
      // setItems(fetchedMovies.data.results);
      // console.log(sample.name);
      // setItems(sample);
      setGenresSeries(g);
      // console.log(seriesItem);
    };
    fetchGenres();
  }, []);
  useEffect(() => {
    const fetchPemain = async () => {
      try {
        const fetchedPemain = await tmdb.get(
          `https://api.themoviedb.org/3/tv/${id}/credits?&language=en-US`
        );
        setPemainItems(fetchedPemain.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPemain();
  }, []);
  useEffect(() => {
    const fetchVideoSeries = async () => {
      try {
        const fetchedVideoSeries = await tmdb.get(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US`
        );
        setVideoSeries(fetchedVideoSeries.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideoSeries();
  }, []);
  console.log(genresSeries);
  console.log(seriesItem.genres);
  let isi;
  // const video = {
  if (videoSeries) {
    isi = (
      <ReactPlayer
        width={"100%"}
        height="500px"
        url={`https://youtu.be/${videoSeries.key}`}
        //   playing={true}
        muted={true}
        controls={true}
      />
    );
  } else {
    isi = (
      <img
        src={`${BASE_IMAGE_URL}${seriesItem.poster_path}`}
        className="img-fluid h-50"
        alt={seriesItem.name}
        // style={{ heigth: "100px" }}
      />
    );
  }
  // };
  return (
    <div>
      <>
        <div maxWidth="md">
          {/* <ReactPlayer
            width={"100%"}
            height="500px"
            url={
              videoSeries == undefined ? (
                <p>tidak ada</p>
              ) : (
                `https://youtu.be/${videoSeries.key}`
              )
            }
            //   playing={true}
            muted={true}
            controls={true}
          /> */}
          {isi}
        </div>
        <div
          className="d-flex justify-content-between align-items-end  h-100"
          style={{ marginLeft: 5 }}
        >
          <div className="d-flex align-items-start flex-column">
            <div className="p-2">
              <div data-aos="zoom-out-right">
                <h1 className="text-white ">{seriesItem.name}</h1>
              </div>
            </div>
            <div className="p-2">
              <Stack direction="row" spacing={1}>
                {/* {genresSeries.map((genres) => (
                  <div key={genres.id}>
                    {genres.name === null ? (
                      <Chip
                        className="text-white"
                        label="drama"
                        color="primary"
                        variant="outlined"
                      />
                    ) : (
                      <Chip
                        className="text-white"
                        label={genres.name}
                        color="primary"
                        variant="outlined"
                      />
                    )}
                  </div>
                ))} */}
              </Stack>
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
        <hr style={{ border: "1px solid red" }} />
        <Box sx={{ width: "100%", heigth: "100%" }}>
          <Tentang />
          <hr style={{ border: "1px solid red" }} />
          <div>
            <h2 className="text-centercle text-white">Cast</h2>
          </div>
          {pemainItem.map((pemain) => (
            <PemainList key={pemain.id} pemainn={pemain} />
          ))}
        </Box>
      </>
      {/* ))} */}
    </div>
  );
};

export default Detail;
