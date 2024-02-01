import axios from "axios";
import { API_URL } from "./APIdata/API_URL";
import { API_key } from "./APIdata/API_key";
import { languageData } from "./APIdata/languageData";

export const getSearchResults = async (searchQuery, category, page) => {
  const response = await axios(
    `${API_URL}search/${category}?query=${searchQuery}&page=${page}?${languageData}`,
    API_key
  );
  return await response.data;
};
