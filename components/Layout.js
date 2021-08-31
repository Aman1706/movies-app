import Meta from './Meta';
import Nav from './Nav';

import { GlobalStyles } from './styles/GlobalStyles';
import { Container, Main } from './styles/LayoutStyles';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <GlobalStyles />
      <Nav />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default Layout;
