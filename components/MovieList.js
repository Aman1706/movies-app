import Pagination from './Pagination';
import MovieItem from './MovieItem';

import { MoviesContainer } from './styles/MoviesContainer';

const MovieList = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieItem key={movie?.id} movie={movie} />
      ))}
      <Pagination content={movies} />
    </MoviesContainer>
  );
};

export default MovieList;
