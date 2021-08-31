import styled from 'styled-components';

export const PersonInfoStyles = styled.div`
  display: flex;
  gap: 5rem;
  background: #faf9f6;
  width: 90vw;
  padding: 3em;

  .personInfo img {
    width: 300px;
    border-radius: 5px;
  }

  .personInfo p span {
    font-weight: bold;
  }

  .personDetails h2 {
    margin-top: 3em;
  }

  .personDetails h3 {
    margin: 3rem 0 2rem 0;
  }

  .personDetails li {
    font-style: italic;
    margin-bottom: 2rem;
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  .personDetails a {
    font-weight: bold;
  }

  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
