import produce from "immer";
import create from "zustand";
import { persist } from "zustand/middleware";

import tmdb from "../api/tmdb";

const initialMovies = [];
const initialActionMovies = [];
const initialComedyMovies = [];
const initialSeries = [];
const initialActionSeries = [];
const initialDramaSeries = [];
const initialCastSeries = [];

const useMovieStore = create(
  persist(
    (set) => ({
      movies: initialMovies,
      actionmovies: initialActionMovies,
      comedymovies: initialComedyMovies,
      series: initialSeries,
      actionseries: initialActionSeries,
      dramaseries: initialDramaSeries,
      castseries: initialCastSeries,
      moviesReady: false,
      seriesReady: false,
      fetchNewMovies: async () => {
        try {
          const { data } = await tmdb.get(
            "/discover/movie?&language=en-US&region=KR&sort_by=release_date.asc&include_adult=false&include_video=true&year=2022&with_original_language=ko&watch_region=ID&with_watch_monetization_types=flatrate"
          );

          set(
            produce((state) => {
              state.movies = data.results;
              state.moviesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchTopMovies: async () => {
        try {
          const { data } = await tmdb.get(
            "discover/movie?&language=en-US&region=KR&sort_by=popularity.asc&include_adult=false&include_video=false&year=2022&vote_average.gte=4&with_original_language=ko&watch_region=ID&with_watch_monetization_types=flatrate"
          );

          set(
            produce((state) => {
              state.movies = data.results;
              state.moviesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchActionMovies: async () => {
        try {
          const { data } = await tmdb.get(
            "discover/movie?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US&region=KR&sort_by=popularity.asc&include_adult=false&include_video=false&with_genres=28&with_original_language=ko&watch_region=ID&with_watch_monetization_types=flatrate"
          );

          set(
            produce((state) => {
              state.actionmovies = data.results;
              state.moviesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchComedyMovies: async () => {
        try {
          const { data } = await tmdb.get(
            "discover/movie?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US&region=KR&sort_by=popularity.asc&include_adult=false&include_video=false&with_genres=35&with_original_language=ko&watch_region=ID&with_watch_monetization_types=flatrate"
          );

          set(
            produce((state) => {
              state.comedymovies = data.results;
              state.moviesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchNewSeries: async () => {
        try {
          const { data } = await tmdb.get(
            "https://api.themoviedb.org/3/discover/tv?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US&sort_by=release_date.asc&first_air_date_year=2022&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
          );

          set(
            produce((state) => {
              state.series = data.results;
              state.seriesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchTopSeries: async () => {
        try {
          const { data } = await tmdb.get(
            "discover/tv?api_key=e83c60df8d74070453c0e741dfb15119&language=en-US&sort_by=popularity.asc&vote_average.gte=4.5&with_original_language=ko&with_watch_monetization_types=flatrate&include_null_first_air_dates=false&with_status=0&with_type=0"
          );

          set(
            produce((state) => {
              state.series = data.results;
              state.seriesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchActionSeries: async () => {
        try {
          const { data } = await tmdb.get(
            "discover/tv?include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&with_genres=18&with_original_language=ko&page=1"
          );

          set(
            produce((state) => {
              state.actionseries = data.results;
              state.seriesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchComedySeries: async () => {
        try {
          const { data } = await tmdb.get(
            "discover/tv?include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&with_genres=35&with_original_language=ko&page=1"
          );

          set(
            produce((state) => {
              state.comedyseries = data.results;
              state.seriesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      fetchCastSeries: async () => {
        try {
          const { data } = await tmdb.get(
            "discover/tv?include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&with_genres=35&with_original_language=ko&page=1"
          );

          set(
            produce((state) => {
              state.comedyseries = data.results;
              state.seriesReady = true;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
      sortMovies: (type) => {
        if (type === "asc") {
          set(
            produce((state) => {
              const sorted = [...state.movies].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              const sortedAction = [...state.actionmovies].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              const sortedComedy = [...state.comedymovies].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              state.movies = sorted;
              state.actionmovies = sortedAction;
              state.comedymovies = sortedComedy;
            })
          );
        }
        if (type === "desc") {
          set(
            produce((state) => {
              const sorted = [...state.movies].sort(
                (a, b) => b.vote_average - a.vote_average
              );
              const sortedAction = [...state.actionmovies].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              const sortedComedy = [...state.comedymovies].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              state.movies = sorted;
              state.actionmovies = sortedAction;
              state.comedymovies = sortedComedy;
            })
          );
        }
      },
      sortSeries: (type) => {
        if (type === "asc") {
          set(
            produce((state) => {
              const sorted = [...state.series].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              const sortedActionSeries = [...state.actionseries].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              const sortedComedySeries = [...state.comedyseries].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              state.series = sorted;
              state.actionseries = sortedActionSeries;
              state.comedyseries = sortedComedySeries;
            })
          );
        }
        if (type === "desc") {
          set(
            produce((state) => {
              const sorted = [...state.series].sort(
                (a, b) => b.vote_average - a.vote_average
              );
              const sortedActionSeries = [...state.actionseries].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              const sortedComedySeries = [...state.comedyseries].sort(
                (a, b) => a.vote_average - b.vote_average
              );
              state.series = sorted;
              state.actionseries = sortedActionSeries;
              state.comedyseries = sortedComedySeries;
            })
          );
        }
      },
    }),
    {
      name: "movie-storage", // nama untuk menyimpan di storage
      getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
    }
  )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectMovies = (state) => state.movies;
export const selectActionMovies = (state) => state.actionmovies;
export const selectComedyMovies = (state) => state.comedymovies;
export const selectSeries = (state) => state.series;
export const selectActionSeries = (state) => state.actionseries;
export const selectComedySeries = (state) => state.comedyseries;
export const selectNewFetchMovies = (state) => state.fetchNewMovies;
export const selectTopFetchMovies = (state) => state.fetchTopMovies;
export const selectActionFetchMovies = (state) => state.fetchActionMovies;
export const selectComedyFetchMovies = (state) => state.fetchComedyMovies;
export const selectNewFetchSeries = (state) => state.fetchNewSeries;
export const selectTopFetchSeries = (state) => state.fetchTopSeries;
export const selectActionFetchSeries = (state) => state.fetchActionSeries;
export const selectComedyFetchSeries = (state) => state.fetchComedySeries;
export const selectMoviesReady = (state) => state.moviesReady;
export const selectSeriesReady = (state) => state.seriesReady;
export const selectSortMovies = (state) => state.sortMovies;
export const selectSortSeries = (state) => state.sortSeries;

export default useMovieStore;
