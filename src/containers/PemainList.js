import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import axios from "axios";
import tmdb from "../api/tmdb";
import AOS from "aos";
import "aos/dist/aos.css";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const PemainList = ({ pemainn }) => {
  const [pemainItem, setPemainItems] = useState([]);
  const { id } = useParams();

  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  };
  // useEffect(() => {
  //   const fetchPemain = async () => {
  //     // console.log(id);
  //     const fetchedPemain = await axios.get(
  //       `https://api.themoviedb.org/3/tv/${id}/credits?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US`
  //     );
  //     // setItems();
  //     let sample = fetchedPemain.data.cast;
  //     // setItems(fetchedMovies.data.results);
  //     console.log(fetchedPemain.data.cast);
  //     setPemainItems(fetchedPemain.data.cast);
  //     console.log(pemainItem);
  //   };
  //   fetchPemain();
  // }, []);
  // useEffect(() => {
  //   const fetchPemain = async () => {
  //     try {
  //       const fetchedPemain = await tmdb.get(
  //         `https://api.themoviedb.org/3/tv/${id}/credits?&language=en-US`
  //       );
  //       setPemainItems(fetchedPemain.data.cast);
  //       // console.log(pemainItem);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchPemain();
  // }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* <div data-aos="fade-down">
        <h2 className="text-centercle text-white">Cast</h2>
      </div> */}
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.dark" }}
        style={flexContainer}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={`${BASE_IMAGE_URL}${pemainn.profile_path}`}
            />
          </ListItemAvatar>
          <ListItemText>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="h5"
              color="white"
            >
              {pemainn.name}
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ borderTop: "thin solid white" }}
        />
        {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="h5"
              color="white"
            >
              Ali Connors
            </Typography>
          </ListItemText>
        </ListItem> */}
      </List>
    </div>
  );
};

export default PemainList;
