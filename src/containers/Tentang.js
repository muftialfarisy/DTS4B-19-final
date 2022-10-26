import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Tentang = () => {
  const [seriesItem, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    AOS.init();
  }, []);
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
      // console.log(seriesItem);
    };
    fetchMovies();
  }, []);
  return (
    <div style={{ marginLeft: 5 }}>
      <div data-aos="fade-down">
        <h2 className="text-center text-white">About</h2>
      </div>
      <p className="text-start text-white">
        {seriesItem.overview == "" ? "None" : seriesItem.overview}
      </p>
    </div>
  );
};

export default Tentang;
