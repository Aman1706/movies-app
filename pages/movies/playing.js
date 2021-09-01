import axios from 'axios';

import MovieList from '../../components/MovieList';
import MovieSearch from '../../components/MovieSearch';

const playing = ({ playingMovies }) => {
  if (!playingMovies) {
    return <h1>Loading...</h1>;
  }
  const { results } = playingMovies;
  return (
    <>
      <MovieSearch />
      <h1>Now Playing Movies</h1>
      <MovieList movies={results} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;

  const { data: playingMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return {
    props: {
      playingMovies,
    },
  };
};

export default playing;
