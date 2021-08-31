import Link from 'next/Link';

import { IMAGE_URL, EMPTY_PERSON_URL, EMPTY_MOVIE_URL } from '../config';

import dayjs from 'dayjs';

import { MovieInfoStyles } from './styles/MovieInfoStyles';

const MovieInfo = ({ movieData, topCast, recommendationsData }) => {
  const rating = Math.round(movieData?.vote_average * 10);
  const durationHours = Math.round(movieData?.runtime / 60);
  const durationMinutes = Math.round(movieData?.runtime % 60);

  return (
    <MovieInfoStyles rating={rating}>
      <div className="title-content">
        <img
          src={
            movieData?.poster_path
              ? `${IMAGE_URL}/${movieData?.poster_path}`
              : `${EMPTY_MOVIE_URL}`
          }
          alt={movieData?.title}
        />
        <div>
          <h1>{movieData?.title}</h1>
          <div className="movie-details">
            <h5>{dayjs(movieData?.release_date).format('MMM DD YYYY')}</h5>
            <h5> | </h5>
            {movieData?.runtime > 0 && (
              <>
                <h5>{`${durationHours}h ${durationMinutes}m`}</h5>
                <h5> | </h5>
              </>
            )}
            <h5>{movieData?.genres.map((genre) => genre?.name).join(', ')}</h5>
          </div>
          <h3 className="rating">{rating ? `${rating}%` : 'NR'}</h3>
          <p>{movieData?.overview}</p>
        </div>
      </div>
      <div className="cast">
        <h2>Top Cast</h2>
        <div className="top-cast">
          {topCast.map((cast) => (
            <Link key={cast?.id} href={`/people/${cast.id}/`}>
              <div className="actors">
                <img
                  src={
                    cast?.profile_path
                      ? `${IMAGE_URL}${cast?.profile_path}`
                      : `${EMPTY_PERSON_URL}`
                  }
                  alt={cast?.name}
                />
                <h6>{cast?.name}</h6>
                <h6>{cast?.character}</h6>
              </div>
            </Link>
          ))}
        </div>
        <Link href={`/movies/${movieData.id}/cast`}>
          <h4 className="full-cast">View Full Cast & Crew</h4>
        </Link>
      </div>
      {recommendationsData.length > 0 && (
        <div className="recommendations">
          <h2>Recommendations</h2>
          <div className="recMovie-container">
            {recommendationsData.map((recommendation) => (
              <Link
                href={`/movies/${recommendation?.id}`}
                key={recommendation?.id}
              >
                <div className="recMovie-item">
                  <img
                    src={`${IMAGE_URL}${recommendation?.poster_path}`}
                    alt={recommendation?.title}
                  />
                  <h6>{recommendation?.title}</h6>
                  <h6>{Math.round(recommendation?.vote_average * 10)}%</h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </MovieInfoStyles>
  );
};

export default MovieInfo;
