import { EMPTY_MOVIE_URL, IMAGE_URL } from '../config';
import Link from 'next/Link';
import { MovieCard } from './styles/MovieCard';

const MovieItem = ({ movie }) => {
  const rating = Math.round(movie?.vote_average * 10);

  return (
    <Link href={`/movies/${movie?.id}`}>
      <MovieCard rating={rating}>
        <img
          src={
            movie?.poster_path
              ? `${IMAGE_URL}${movie?.poster_path}`
              : `${EMPTY_MOVIE_URL}`
          }
          alt={movie?.title}
        />
        <div className="movie-details">
          <div className="percent">{rating ? `${rating}%` : 'NR'}</div>
          <h5>{movie?.title}</h5>
        </div>
      </MovieCard>
    </Link>
  );
};

export default MovieItem;
