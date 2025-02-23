import { useState, useEffect } from "react";
import { querySearch } from "../../api.Js";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css"


const MoviesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  useEffect(() => {  
     let isCancelled = false;
    setIsLoading(true);
  
    querySearch(query)
      .then((data) => {
        if (!isCancelled) setMovies(data);
      })
  
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });
  
    return () => {
      isCancelled = true;
    };
   }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    updateSearchParams("q", query);
    if (!query) return;
    let isCancelled = false;
    setIsLoading(true);
  
    querySearch(query)
      .then((data) => {
        if (!isCancelled) setMovies(data);
      })
  
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });
  
    return () => {
      isCancelled = true;
    };
  };
  
  

  return (
    <div className={s.MoviesPage}>
      <form onSubmit={handleSearch}>
        <input className={s.searchBar} value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className={s.searchBtn} type="submit">Search</button>
      </form>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  )
}

export default MoviesPage