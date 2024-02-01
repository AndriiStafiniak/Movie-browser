import axios from "axios";

import { API_URL } from "./APIdata/API_URL";
import { API_key } from "./APIdata/API_key";
import { languageData } from "./APIdata/languageData";

export const getCredits = async (movieId) => {
   const response = await axios.get(
      `${API_URL}movie/${movieId}/credits?${languageData}`,
      API_key
   );
   return await response.data;
};
