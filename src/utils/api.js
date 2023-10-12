import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGFiMWZiYTljZDY2NjA4MzdiZGU0MTkyMjkyZmQwNyIsInN1YiI6IjY0NTY2OTJjOTFmMGVhMDBmZjExZjM3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptK9Ce9XWRlm3FV9j-ESxwrC7dCdsBhuIS6FkPOXnmo';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN, // space after bearer is necessary
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        });
        return data;
    }
    catch (error) {
        console.log(error);
        return error
    }
}