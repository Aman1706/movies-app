import Pagination from './Pagination';

import PeopleItem from './PeopleItem';

import { PeopleContainer } from './styles/PeopleContainer';

const PeopleList = ({ people }) => {
  return (
    <PeopleContainer>
      {people.map((person) => (
        <PeopleItem key={person?.id} person={person} />
      ))}
      <Pagination content={people} />
    </PeopleContainer>
  );
};

export default PeopleList;
