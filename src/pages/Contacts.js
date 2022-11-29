import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contact/operations';
import { Container } from 'components/App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import Filter from 'components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container>
        <Section title="" header="Phonebook">
          <ContactForm />
        </Section>
        {contacts && contacts.length > 0 && (
          <Section header="" title="Contacts">
            <Filter />
            <ContactList />
          </Section>
        )}
      </Container>
    </>
  );
}
