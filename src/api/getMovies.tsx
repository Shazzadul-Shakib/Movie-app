import { Genre, Movie } from "@/utils/types";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async (): Promise<Movie[]> => {
  try {
    // Fetch popular movies
    const popularMoviesResponse = await axios.get<{ results: Movie[] }>(
      `${BASE_URL}/movie/popular`,
      {
        params: {
          api_key: API_KEY,
        },
      },
    );

    const movies = popularMoviesResponse.data.results;

    // Fetch genres list
    const genresResponse = await axios.get<{ genres: Genre[] }>(
      `${BASE_URL}/genre/movie/list`,
      {
        params: {
          api_key: API_KEY,
        },
      },
    );

    const genres = genresResponse.data.genres;

    // Map genres to each movie
    const moviesWithGenres = movies.map((movie) => {
      const genreNames = movie.genre_ids.map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
      });
      return {
        ...movie,
        genreNames, // Add genre names to each movie
      };
    });

    return moviesWithGenres;
  } catch (error) {
    console.error("Error fetching movies or genres:", error);
    return [];
  }
};
