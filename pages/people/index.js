import axios from 'axios';

import PeopleList from '../../components/PeopleList';
import PersonSearch from '../../components/PersonSearch';

const popularPeople = ({ popularPeople }) => {
  const { results } = popularPeople;
  return (
    <>
      <PersonSearch />
      <h1>Popular People</h1>
      <PeopleList people={results} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;

  const { data: popularPeople } = await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return {
    props: {
      popularPeople,
    },
  };
};

export default popularPeople;
