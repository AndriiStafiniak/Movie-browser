import axios from "axios";
import { API_URL } from "./APIdata/API_URL";
import { API_key } from "./APIdata/API_key";
import { languageData } from "./APIdata/languageData";
export const getPopular = async (category, page) => {
  const response = await axios(
    `${API_URL}${category}/popular?page=${page}?${languageData}`,
    API_key
  );

  return await response.data;
};
