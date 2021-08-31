import axios from 'axios';

import MovieInfo from '../../../components/MovieInfo';

const movie = ({ movieData, topCast, recommendationsData }) => {
  return (
    <MovieInfo
      movieData={movieData}
      topCast={topCast}
      recommendationsData={recommendationsData}
    />
  );
};

export const getServerSideProps = async (context) => {
  const { data: movieData } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const { data: creditsData } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  let topCast = creditsData.cast.slice(0, 10);

  const {
    data: { results: recommendationsData },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      movieData,
      topCast,
      recommendationsData,
    },
  };
};

export default movie;
