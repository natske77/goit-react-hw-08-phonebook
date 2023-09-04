import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/auth/auth-operations';
import { getError } from 'redux/auth/auth-selectors';
import { getNotification } from 'components/helped/getNotificatin';
import { Container } from 'components/HomeDescription/HomeDescription.styled';
import { Button, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (password.value.length < 7) {
      getNotification(
        `The password must be composed of at least 7 characters.`
      );
      return;
    }

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input type="text" name="name" min="6" />
        </Label>
        <Label>
          E-mail
          <Input type="text" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Sign up</Button>
      </Form>
      {error?.response?.data?.name &&
        getNotification('This email is already registered')}
    </Container>
  );
};
