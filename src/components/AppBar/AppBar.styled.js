import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #20232a;
  padding-left: 50px;
  padding-right: 50px;
  height: 50px;
`;

const ContainerLogout = styled.div`
  display: flex;
  gap: 30px;
`;

const UserName = styled.p`
  font-size: 18px;
  & span {
    color: #61dafb;
  }
`;

const Button = styled.button`
  font-size: 18px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  &:hover {
    color: #61dafb;
  }
`;

const Link = styled(NavLink)`
  font-size: 18px;
  padding: 15px 0;
  &:hover {
    color: #61dafb;
  }
`;

export { Header, Link, ContainerLogout, UserName, Button };
