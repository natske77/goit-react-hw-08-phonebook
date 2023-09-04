import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Section } from 'components/Section/Section';
import { Container, Description, Link, Nav } from './HomeDescription.styled';

export const HomeDescription = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <div>
        <Section title={'Welcome to Phonebook'}>
          <Description>
            Hello and welcome! We are excited to have you on our PhoneBook App.
            Here, you can easily manage and store all your important mobile
            contacts in one place.
          </Description>
          {isLoggedIn ? (
            <Description>
              Thank you for being a part of our community. Feel free to explore
              and use our app to keep your contacts safe and organized!
            </Description>
          ) : (
            <>
              <Description>
                To get started, you can create an account or log in if you
                already have one. Join us today and make your contact management
                effortless!
              </Description>
              <Nav>
                <Link to="/register">Register</Link>
                <Link to="/login">Log In</Link>
              </Nav>
            </>
          )}
        </Section>
      </div>
    </Container>
  );
};