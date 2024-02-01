import axios from "axios";
import { API_URL } from "./APIdata/API_URL";
import { API_key } from "./APIdata/API_key";
import { languageData } from "./APIdata/languageData";

export const getPersonDetails = async (personId) => {

   const response = await axios.get(`${API_URL}person/${personId}?${languageData}`,
      API_key
   );
   return await response.data
}
