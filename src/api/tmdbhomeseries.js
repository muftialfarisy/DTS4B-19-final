import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3/";

const tmdbhomeseries = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
    language: "en_US",
    region: "KR",
    with_original_language: "ko",
    watch_region: "ID",
    include_adult: false,
    sort_by: "asc",
    first_air_date_year: 2022,
  },
});

export default tmdbhomeseries;
