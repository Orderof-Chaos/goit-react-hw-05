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

  const urlQuery = searchParams.get("q") || ""

  useEffect(() => {  
     if(!urlQuery) return
  
    querySearch(urlQuery)
      .then((data) => {
        setMovies(data);
      })
  
      .finally(() => {
        setIsLoading(false);
      });
  
   }, [urlQuery]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    updateSearchParams("q", query);
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