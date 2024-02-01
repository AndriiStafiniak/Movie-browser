import axios from "axios";
import { API_URL } from "./APIdata/API_URL";
import { API_key } from "./APIdata/API_key";
import { languageData } from "./APIdata/languageData";

export const getGenres = async () => {

  const response = await axios.get(`${API_URL}genre/movie/list?${languageData}`,
    API_key
  );

  return await response.data.genres;
};