
import axios from "axios";
import { API_KEY } from "./API_data/KEY";
import { URL_API } from "./API_data/URL";

export const getMoviesDetails = async (movieId) => {

   const response = await axios.get(`${URL_API}movie/${movieId}?${API_KEY}language=en-US`, {
      headers: {
         accept: 'application/json',
      }
   });
   return await response.data;
};

