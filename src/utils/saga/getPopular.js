import axios from "axios";
import { URL_API } from "./API_data/URL";
import { API_KEY } from "./API_data/KEY";

export const getPopular = async (category, page) => {
  const response = await axios(
    `${URL_API}${category}/popular?page=${page}?${API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );

  return await response.data;
};
