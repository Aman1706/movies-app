import Link from 'next/link';

import dayjs from 'dayjs';

import { IMAGE_URL, EMPTY_PERSON_URL } from '../config';

import { PersonInfoStyles } from './styles/PersonInfoStyles';

const PersonInfo = ({ person, credits }) => {
  return (
    <PersonInfoStyles>
      <div className="personInfo">
        <img
          src={
            person?.profile_path
              ? `${IMAGE_URL}${person?.profile_path}`
              : `${EMPTY_PERSON_URL}`
          }
          alt={person?.name}
        />
        <h2>Personal Info</h2>
        <p>
          <span>Known for</span> : {person?.known_for_department}
        </p>
        <p>
          {' '}
          <span>Gender</span> : {person?.gender === 1 ? 'Female' : 'Male'}
        </p>
        <p>
          <span>Birthday</span> :{' '}
          {person?.birthday
            ? dayjs(person?.birthday).format('MMMM DD YYYY')
            : 'NA'}
        </p>
        <p>
          <span>Place of Birth</span> :{' '}
          {person?.place_of_birth ? person?.place_of_birth : 'NA'}
        </p>
      </div>

      <div className="personDetails">
        <h1>{person?.name}</h1>
        <p>{person?.biography}</p>
        <h2>Career History</h2>

        {!credits?.cast.length ? (
          <p>No Data Available</p>
        ) : (
          <>
            <h3>Cast</h3>
            <ul>
              {credits?.cast.map((cast) => (
                <li key={cast?.id}>
                  <div>
                    {cast?.release_date
                      ? dayjs(cast?.release_date).format('YYYY')
                      : 'TBC'}
                  </div>
                  <div>
                    <Link href={`/movies/${cast?.id}`}>
                      <a>{cast?.title}</a>
                    </Link>{' '}
                    {cast?.character && `as ${cast?.character}`}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {credits?.crew.length > 0 && (
          <>
            <h3>Crew</h3>
            <ul>
              {credits?.crew.map((crew) => (
                <li key={crew?.id}>
                  <div>
                    {crew?.release_date
                      ? dayjs(crew?.release_date).format('YYYY')
                      : 'TBC'}
                  </div>
                  <div>
                    <Link href={`/movies/${crew?.id}`}>
                      <a>{crew?.title}</a>
                    </Link>{' '}
                    {crew?.job && `... ${crew?.job}`}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </PersonInfoStyles>
  );
};

export default PersonInfo;
