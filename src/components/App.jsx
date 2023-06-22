import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
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
  console.log(filtered);
  console.log(data);
  const dispatch = useDispatch();
  const formSubmitHandler = ({ name, number }) => {
    console.log(data);
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(data);
    const contactName = data.map(prevContact => prevContact.name);
    console.log(contactName);
    if (contactName.includes(contact.name)) {
      alert(`${name} is already in contacts`);
      return;
    }
  };
  const changeFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
    return;
  };

  const toastifyOptions = {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    toastId: 'custom-id-yes',
  };
  const getFilteredContacts = () => {
    console.log(filtered);
    console.log(data);
    if (!filtered) {
      return data;
    }
    const normalizedFilter = filtered.toLowerCase();
    const filteredContacts = data.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
    );
    if (normalizedFilter && !filteredContacts.length) {
      toast.warn(`No contacts matching your request`, toastifyOptions);
    }
    return filteredContacts;
  };
  // const getVisibleContacts = () => {
  //   const filteredObj = Object.fromEntries(
  //     Object.entries(data).filter(([_, value]) => value.name.includes(filtered))
  //   );
  //   return filteredObj;
  // };

  const filteredContact = getFilteredContacts();
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
