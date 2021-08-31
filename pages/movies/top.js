import axios from 'axios';

import MovieList from '../../components/MovieList';
import MovieSearch from '../../components/MovieSearch';

const top = ({ topMovies }) => {
  const { results } = topMovies;
  return (
    <>
      <MovieSearch />
      <h1>Top Rated Movies</h1>
      <MovieList movies={results} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;

  const { data: topMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return {
    props: {
      topMovies,
    },
  };
};

export default top;
