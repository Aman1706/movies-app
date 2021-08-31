import styled from 'styled-components';

export const PersonCard = styled.div`
  width: 250px;
  height: 350px;
  background-color: #faf9f6;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    height: 300px;
  }

  h3 {
    text-align: center;
    margin: 0.7rem 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
