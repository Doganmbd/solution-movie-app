import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCards from "../components/MovieCards";

const API_KEY = process.env.REACT_APP_TMDB_key;

console.log(API_KEY);

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

console.log(FEATURED_API);

const Main = () => {
  //!Aşağıda map edeceğim için initial değerini boş array verdim.

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = (e)=> {
  e.preventDefault();
  getMovies(SEARCH_API+searchItem)
  }

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  console.log(movies);

  return (
    <>
      {/* //!Enter da onSubmit yapmak için form kullandım type:search da otomatik çarpı işareti çıkıyor bu yüzden kullandım*/}
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          movies?.map((movie) => <MovieCards key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
