import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 18px;
`;

const Input = styled.input`
  height: 35px;
  width: 300px;
  color: #ffffff;
  font-size: 18px;
  background-color: transparent;
  border: 2px solid #61dafb;
  border-radius: 5px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  gap: 20px;

  font-size: 18px;
`;

const InfoContact = styled.p`
  margin: 0;
`;

const Button = styled.button`
  text-align: center;

  width: 100px;
  font-size: 18px;

  color: #ffffff;
  background-color: transparent;

  border: 2px solid #61dafb;
  border-radius: 5px;

  &:hover {
    color: #000000;
    background-color: #61dafb;
  }
`;

export { Label, Input, List, Item, Button, InfoContact };
