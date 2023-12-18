import axios from "axios";
import { URL_API } from "./API_data/URL";
import { API_KEY } from "./API_data/KEY";

export const getCredits = async (movieId) => {
  const response = await axios.get(
    `${URL_API}movie/${movieId}/credits?${API_KEY}&language=en-US`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  return await response.data;
}; 
