import React from 'react';
import { removeContacts } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import { NameList, ListItem, DeleteButton } from './ContactList.styled';
export const ContactList = () => {
  const data = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filtered.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getVisibleContacts();

  const dispatch = useDispatch();
  return (
    <NameList>
      {filteredContact.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <DeleteButton
            type="button"
            onClick={() => dispatch(removeContacts(id))}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </NameList>
  );
};
