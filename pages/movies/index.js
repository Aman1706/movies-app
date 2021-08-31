import axios from 'axios';

import MovieList from '../../components/MovieList';
import MovieSearch from '../../components/MovieSearch';

const popular = ({ popularMovies }) => {
  const { results } = popularMovies;
  return (
    <>
      <MovieSearch />
      <h1>Popular Movies</h1>
      <MovieList movies={results} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;

  const { data: popularMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return {
    props: {
      popularMovies,
    },
  };
};

export default popular;
