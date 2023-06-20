import React from 'react';
import { removeContacts } from 'redux/contacts/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NameList, ListItem, DeleteButton } from './ContactList.styled';
export const ContactList = () => {
  const data = useSelector(state => state.contacts);
  console.log(data);
  const dispatch = useDispatch();

  return (
    <NameList>
      {data.map(({ id, name, number }) => (
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

      {/* {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))} */}
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
  // onDeleteContact: PropTypes.func.isRequired,
};
