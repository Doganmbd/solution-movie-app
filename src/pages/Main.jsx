import React from "react";

const Main = () => {
  const API_KEY = process.env.REACT_APP_TMDB_key;

  console.log(API_KEY);

  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  return <div>
    
  </div>;
};

export default Main;
