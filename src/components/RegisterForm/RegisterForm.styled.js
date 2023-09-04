import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

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

const Button = styled.button`
  text-align: center;

  width: 120px;
  font-size: 18px;

  color: #ffffff;
  background-color: transparent;

  border: 2px solid #61dafb;
  border-radius: 5px;

  padding: 10px 0;

  &:hover {
    color: #000000;
    background-color: #61dafb;
  }
`;

export { Form, Label, Input, Button };
