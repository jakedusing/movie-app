import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}s=${query}`);
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}i=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
