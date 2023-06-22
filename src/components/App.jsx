import { nanoid } from 'nanoid';
import { Section } from './Section';
import { Form } from './Form';
import { Filter } from './Filter';
import { getContacts } from 'redux/contacts/contactsSlice';
import { filterContacts, getFilter } from 'redux/filter/filterSlice';
import { ContactList } from './ContactList';
import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
export function App() {
  const data = useSelector(getContacts);

  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();
  const formSubmitHandler = ({ name, number }) => {
    console.log(data);
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const contactName = data.map(prevContact => prevContact.name);
    if (contactName.includes(contact.name)) {
      alert(`${name} is already in contacts`);
      return;
    }
  };
  const changeFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
    return;
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filtered.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getVisibleContacts();
  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmitForm={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filtered} onChange={changeFilter} />
        <ContactList data={filteredContact} />
      </Section>
    </Container>
  );
}
