import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Link } from 'components/AppBar/AppBar.styled';
import { Logo, Nav } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Nav>
        <NavLink to="/" title="Home">
          <Logo>PhoneBook</Logo>
        </NavLink>
        <Link to="/" title="Home">
          <span>Home</span>
        </Link>
        {isLoggedIn && (
          <Link to="/contacts">
            <span>Contacts</span>
          </Link>
        )}
      </Nav>
    </>
  );
};
