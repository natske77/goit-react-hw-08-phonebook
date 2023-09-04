import { useDispatch, useSelector } from 'react-redux';

import { getIsLoggedIn, getUser } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Button, ContainerLogout, Header, UserName } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <ContainerLogout>
          <UserName>
            Welcome, <span>{user.name}</span>
          </UserName>
          <Button type="button" onClick={() => dispatch(logOut())}>
            <span>Logout</span>
          </Button>
        </ContainerLogout>
      ) : (
        <AuthNavigation />
      )}
    </Header>
  );
};
