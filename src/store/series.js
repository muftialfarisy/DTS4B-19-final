import produce from "immer";
import create from "zustand";
import { persist } from "zustand/middleware";

import tmdbhomeseries from "../api/tmdbhomeseries";

const initialMovies = [];

const useSeriesStore = create(
  persist(
    (set) => ({
      series: initialMovies,
      moviesReady: false,
      fetchSeries: async () => {
        try {
          const { data } = await tmdbhomeseries.get("discover/tv/");

          set(
            produce((state) => {
              state.series = data.results;
              state.moviesReady = true;
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
              state.movies = sorted;
            })
          );
        }
        if (type === "desc") {
          set(
            produce((state) => {
              const sorted = [...state.movies].sort(
                (a, b) => b.vote_average - a.vote_average
              );
              state.movies = sorted;
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
export const selectSeries = (state) => state.series;
export const selectFetchSeries = (state) => state.fetchSeries;
export const selectNewFetchMovies = (state) => state.fetchNewMovies;
export const selectMoviesReady = (state) => state.moviesReady;
export const selectSortMovies = (state) => state.sortMovies;

export default useSeriesStore;
