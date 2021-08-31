import axios from 'axios';

import MovieList from '../../components/MovieList';
import MovieSearch from '../../components/MovieSearch';

const upcoming = ({ upcomingMovies }) => {
  const { results } = upcomingMovies;

  return (
    <>
      <MovieSearch />
      <h1>Upcoming Movies</h1>
      <MovieList movies={results} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;

  const { data: upcomingMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return {
    props: {
      upcomingMovies,
    },
  };
};

export default upcoming;
