import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { Button, InfoContact, Item, List } from 'components/Filter/Filter.styled';

export function ContactList() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const { contactsItem, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contactsItem.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilterContact();

  return (
    <List>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contactsItem.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <InfoContact>
              <span>{name}: </span>
              <span>{number}</span>
            </InfoContact>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              <span>Delete</span>
            </Button>
          </Item>
        ))
      ) : (
        <Item>Oops, contact list is empty. Add new contact</Item>
      )}
    </List>
  );
}
