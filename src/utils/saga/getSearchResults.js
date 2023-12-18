import axios from "axios";
import { API_KEY } from "./API_data/KEY";
import { URL_API } from "./API_data/URL";

export const getSearchResults = async (searchQuery, category, page) => {
  const response = await axios(
    `${URL_API}search/${category}?query=${searchQuery}&page=${page}?${API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  return await response.data;
};
