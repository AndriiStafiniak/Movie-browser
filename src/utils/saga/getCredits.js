// import axios from "axios";

import { useGetData } from "./useGetData"

// import { URL_API } from "./ApiData/apiURL";
// import { API_KEY } from "./ApiData/apiKey";

// export const getCredits = async (movieId) => {
//   const response = await axios.get(
//     `${URL_API}movie/${movieId}/credits?${API_KEY}&language=en-US`,
//     {
//       headers: {
//         accept: "application/json",
//       },
//     }
//   );
//   return await response.data;
// }; 
const apiData = "movie/${movieId}/credits"
useGetData(apiData)