import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, isLoading }) => {
  const location = useLocation();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {movies.length > 0 ? (
        <ul className={s.listMovies}>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                className={s.link}
                to={`/movies/${id}`}
                state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies</p>
      )}
    </div>
  )
}

export default MovieList