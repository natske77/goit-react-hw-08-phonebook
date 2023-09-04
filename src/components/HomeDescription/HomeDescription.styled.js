import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;

const Description = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;
`;

const Link = styled(NavLink)`
  width: 120px;
  text-align: center;
  font-size: 18px;
  border: 2px solid #61dafb;
  border-radius: 5px;
  padding: 10px 0;
  &:hover {
    color: #000000;
    background-color: #61dafb;
  }
`;

export { Container, Description, Link, Nav };
