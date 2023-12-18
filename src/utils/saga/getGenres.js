import axios from "axios";
import { API_KEY } from "./API_data/KEY";
import { URL_API } from "./API_data/URL";

export const getGenres = async () => {

  const response = await axios.get(`${URL_API}genre/movie/list?${API_KEY}language=en`, {
    headers: {
      accept: 'application/json',
    }
  });

  return await response.data.genres;
};