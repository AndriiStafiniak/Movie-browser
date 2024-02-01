
import axios from "axios";
import { API_URL } from "./APIdata/API_URL";
import { API_key } from "./APIdata/API_key";
import { languageData } from "./APIdata/languageData";

export const getMoviesDetails = async (movieId) => {

   const response = await axios.get(`${API_URL}movie/${movieId}?${languageData}`,
      API_key
   );
   return await response.data;
};

