import React from 'react';
import PropTypes from 'prop-types';
import { NameList, ListItem, DeleteButton } from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <NameList>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </NameList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
