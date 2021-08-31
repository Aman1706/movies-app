import Link from 'next/Link';
import { NavStyles } from './styles/NavStyles';

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link href="/movies">
            <a>
              <h3>Movies App</h3>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/movies">Popular</Link>
        </li>
        <li>
          <Link href="/movies/playing">Now Playing</Link>
        </li>
        <li>
          <Link href="/movies/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link href="/movies/top">Top Rated</Link>
        </li>
        <li>
          <Link href="/people/">People</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
