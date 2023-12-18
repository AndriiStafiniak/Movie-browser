import axios from "axios";
import { API_KEY } from "./API_data/KEY";
import { URL_API } from "./API_data/URL";

export const getCreditsForPerson = async (personId) => {
   const response = await axios.get(`${URL_API}person/${personId}/movie_credits?${API_KEY}`, {
      headers: {
         accept: 'application/json'
      }
   });
   return await response.data
};