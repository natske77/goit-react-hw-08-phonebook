import { Nav } from './AuthNavigation.styled';
import { Link } from 'components/AppBar/AppBar.styled';

export const AuthNavigation = () => {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Nav>
  );
};
