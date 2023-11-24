import axios from "axios";

export const getCreditsForPerson = async (personId) => {
   const response = await axios.get(`https://api.themoviedb.org/3/person/${personId}/movie_credits`, {
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWIwODA0MTkzNDhmOWE0ODI2YjM4MGYyMDIyMjdmOSIsInN1YiI6IjY1NTUyOGQyNjdiNjEzNDVjY2FlY2E2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jLCs-Vj_4OdI-m_zrK2B2Or7dmeDTwZ53dwHDnM0HJ0'
      }
   });
   return response.data
};