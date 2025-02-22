import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../api.Js";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
     setIsLoading(true);
     fetchMovieDetails(movieId).then(setMovie).then(() => setIsLoading(false));
   }, [movieId]);
  
  if (isLoading) {
    return <p>Loading...</p>
  }

  return movie ? (
    <div className={s.MovieDetailsPage}>
      <ReturnButton />
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h1>{movie.title}</h1>
        <p >Score:{Math.round(movie.vote_average * 10)}%</p>
        <p>{movie.overview}</p>
        <ul className={s.genresList}>
          {
            movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))
          }
        </ul>
      </div>

      <div className={s.divLink}>
        <Link className={s.link} to={`cast`}>Actors</Link>
        <Link className={s.link} to={`reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </div>
  ) : (
    <p>Not found</p>
  );
}

export default MovieDetailsPage