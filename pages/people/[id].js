import axios from 'axios';

import PersonInfo from '../../components/PersonInfo';

import { API_KEY } from '../../config';

const id = ({ person, credits }) => {
  return <PersonInfo person={person} credits={credits} />;
};

export const getServerSideProps = async (context) => {
  const { data: person } = await axios.get(
    `https://api.themoviedb.org/3/person/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const { data: credits } = await axios.get(
    `https://api.themoviedb.org/3/person/${context.params.id}/movie_credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: {
      person,
      credits,
    },
  };
};

export default id;
