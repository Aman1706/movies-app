import axios from 'axios';

import CastInfo from '../../../components/CastInfo';

const cast = ({ creditsData }) => {
  return (
    <>
      <div>
        <h1>Cast & Crew</h1>
      </div>
      <CastInfo creditsData={creditsData} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { data: creditsData } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: {
      creditsData,
    },
  };
};

export default cast;
