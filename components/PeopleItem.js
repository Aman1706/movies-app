import { EMPTY_PERSON_URL, IMAGE_URL } from '../config';
import Link from 'next/Link';
import { PersonCard } from './styles/PersonCard';

const PeopleItem = ({ person }) => {
  return (
    <Link href={`/people/${person?.id}`}>
      <PersonCard>
        <img
          src={
            person?.profile_path
              ? `${IMAGE_URL}${person?.profile_path}`
              : `${EMPTY_PERSON_URL}`
          }
          alt={person?.name}
        />
        <h3>{person?.name}</h3>
      </PersonCard>
    </Link>
  );
};

export default PeopleItem;
