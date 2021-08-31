import styled from 'styled-components';

export const NavStyles = styled.div`
  height: 50px;
  padding: 10px;
  background: #000;
  color: #fff;
  display: flex;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  ul li h3 {
    margin-right: 20px;
  }
  ul li a {
    margin: 5px 15px;
  }

  @media only screen and (max-width: 680px) {
    ul li h3 {
      margin-right: 0px;
    }
  }

  @media only screen and (max-width: 400px) {
    height: 200px;
    align-items: center;
    ul {
      flex-wrap: wrap;
    }

    ul li a {
      margin: 0 15px;
    }
  }
`;
