import styled from 'styled-components';

export const CastListStyles = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 2rem;
  background-color: #faf9f6;
  padding: 3rem;

  img {
    width: 50px;
    height: 70px;
  }

  ul {
    list-style-type: none;
  }

  li a {
    display: flex;
    margin-bottom: 2em;
    gap: 1em;
  }

  li:hover {
    cursor: pointer;
  }

  .name-details {
    line-height: 1em;
  }

  .name-details p:first-child {
    font-weight: bold;
  }

  .name-details p:last-child {
    font-style: italic;
  }

  @media only screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
