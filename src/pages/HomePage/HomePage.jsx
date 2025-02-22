import { useEffect, useState } from "react";
import { fetchTrending } from "../../api.Js";
import MovieList from "../../components/MovieList/MovieList"
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
        setIsLoading(true);
        fetchTrending().then(setMovies).then(() => { setIsLoading(false) });
    }, []);
  return (
    <div>
      <h1>Trending films</h1>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  )
}

export default HomePage