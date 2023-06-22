import React from 'react';
import { removeContacts } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NameList, ListItem, DeleteButton } from './ContactList.styled';
export const ContactList = data => {
  const contactInfo = Object.entries(data.data).flatMap(dataInfo =>
    dataInfo.slice(1)
  );
  const dispatch = useDispatch();
  return (
    <NameList>
      {contactInfo.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
