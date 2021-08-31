import styled from 'styled-components';

export const MovieInfoStyles = styled.div`
  background: #faf9f6;
  padding: 3em;
  width: 90vw;

  .title-content {
    display: flex;
    align-items: center;
    gap: 10em;
    margin-bottom: 8em;
  }

  .movie-details {
    display: flex;
    gap: 1.5em;
  }

  .rating {
    color: #fff;
    font-weight: bold;
    display: inline-block;
    background-color: ${(props) =>
      (props.rating == 0 && '#000000') ||
      (props.rating <= 40 && '#b30000') ||
      (props.rating <= 69 && '#FFA500') ||
      (props.rating >= 70 && '#008800')};
    padding: 0.8em;
    border-radius: 30%;
  }

  .title-content img {
    width: 300px;
    height: 450px;
    border-radius: 5px;
  }

  .recMovie-container,
  .top-cast {
    display: flex;
    overflow-y: scroll;
  }

  .recMovie-item,
  .actors {
    background: #323232;
    border-radius: 5px;
    color: #fff;
    margin-right: 1em;
    padding: 1em;
  }

  .recMovie-item,
  .actors:hover {
    cursor: pointer;
  }

  .recMovie-item img,
  .actors img {
    width: 150px;
    height: 250px;
  }

  .cast {
    margin-bottom: 8em;
  }

  .full-cast:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media only screen and (max-width: 900px) {
    .title-content {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
