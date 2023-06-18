import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_key;

console.log(API_KEY);

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

console.log(FEATURED_API);


const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])
  
  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err));
  };

  return <div></div>;
};

export default Main;
