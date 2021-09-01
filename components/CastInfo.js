import Link from 'next/link';

import { CastListStyles } from './styles/CastListStyles';

import { IMAGE_URL, EMPTY_PERSON_URL } from '../config';

const CastInfo = ({ creditsData }) => {
  return (
    <CastListStyles>
      <div className="cast-list">
        <h3>Cast - {creditsData?.cast.length}</h3>
        <ul>
          {creditsData.cast.map((cast) => (
            <li key={cast?.id}>
              <Link href={`/people/${cast.id}`}>
                <a>
                  <img
                    src={
                      cast?.profile_path
                        ? `${IMAGE_URL}${cast?.profile_path}`
                        : `${EMPTY_PERSON_URL}`
                    }
                    alt={cast?.name}
                  />
                  <div className="name-details">
                    <p>{cast?.name}</p>
                    <p>{cast?.character}</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="crew-list">
        <h3>Crew - {creditsData?.crew.length}</h3>
        <ul>
          {creditsData?.crew.map((crew) => (
            <li key={crew?.id}>
              <Link href={`/people/${crew.id}`}>
                <a>
                  <img
                    src={
                      crew?.profile_path
                        ? `${IMAGE_URL}${crew?.profile_path}`
                        : `${EMPTY_PERSON_URL}`
                    }
                    alt={crew?.name}
                  />
                  <div className="name-details">
                    <p>{crew?.name}</p>
                    <p>{crew?.job}</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </CastListStyles>
  );
};

export default CastInfo;
