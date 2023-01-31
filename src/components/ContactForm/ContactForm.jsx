import { useState } from 'react';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contact/operations';
import { Input, Box, FormLabel, Button } from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const [name, setContactName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const onInputChange = e => {
    const fieldName = e.currentTarget.name;
    const fieldValue = e.currentTarget.value;

    if (fieldName === 'name') {
      setContactName(fieldValue);
    }
    if (fieldName === 'number') {
      setNumber(fieldValue);
    }
    if (fieldName === 'email') {
      setEmail(fieldValue);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (contacts.items.length > 0) {
      const contactsInPhonebook = [];
      contacts.items.forEach(({ name }) =>
        contactsInPhonebook.push(name.toLowerCase())
      );
      if (contactsInPhonebook.includes(name.toLowerCase())) {
        Notify.warning(`${name}is already in contacts.`);
        form.reset();
        return;
      }
    }
    dispatch(addContacts({ name, phone: number, email }));
    form.reset();
  };

  return (
    <>
      <Box as="form" pl={4} onSubmit={onSubmit}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onInputChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onInputChange}
          />
        </FormLabel>
        <FormLabel>
          Email
          <Input
            type="email"
            name="email"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            onChange={onInputChange}
          />
        </FormLabel>
        <Button variant="outline" type="submit">
          Add contact
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
