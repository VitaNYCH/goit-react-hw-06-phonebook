import { Section } from './Section';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container } from './App.styled';
export function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
