import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container } from './App.styled';

import { useSelector } from 'react-redux';

export function App() {
  const data = useSelector(state => state.contacts);
  console.log(data);

  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    console.log({ name });
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    const contactName = data.map(prevContact => prevContact.name);
    if (contactName.includes(contact.name)) {
      alert(`${name} is already in contacts`);
      return;
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContacts = () => {
    // const normalizedFilter = filter.toLowerCase();
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter)
    // );
  };

  const filterContacts = getVisibleContacts();
  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmitForm={formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={filterContacts} />
      </Section>
    </Container>
  );
}
