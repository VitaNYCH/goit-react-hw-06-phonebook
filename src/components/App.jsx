import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Section } from './Section';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container } from './App.styled';

export function App() {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const contactName = contacts.map(prevContact => prevContact.name);
    if (contactName.includes(contact.name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [contact, ...prevState]);
  };
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getVisibleContacts();
  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmitForm={formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
}
