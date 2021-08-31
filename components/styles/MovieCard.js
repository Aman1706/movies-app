import styled from 'styled-components';

export const MovieCard = styled.div`
  width: 250px;
  height: 500px;
  background-color: #faf9f6;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    width: 100%;
    height: 350px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin-bottom: 10px;
  }

  .movie-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5em;
  }

  .percent {
    color: #fff;
    font-weight: bold;
    background-color: ${(props) =>
      (props.rating == 0 && '#000000') ||
      (props.rating <= 40 && '#b30000') ||
      (props.rating <= 69 && '#FFA500') ||
      (props.rating >= 70 && '#008800')};
    padding: 0.8em;
    border-radius: 10%;
  }

  &:hover {
    cursor: pointer;
  }
`;
