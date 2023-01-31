import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact/operations';
import { selectFilter, selectContacts } from 'redux/contact/selectors';
import { List, ListItem, Flex, IconButton } from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';

const ContactList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const handleDelete = id => {
    return dispatch(deleteContact(id));
  };

  const getVisibleContacts = (contacts, filters) => {
    if (filters === '') return contacts;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filters?.toLowerCase());
    });
  };

  const visibleContacts = getVisibleContacts(contacts, filters);

  if (!visibleContacts) return;

  return (
    <Flex as={List} spacing={3} flexDirection="column">
      {visibleContacts.map(({ _id, name, phone, email }) => (
        <Flex
          as={ListItem}
          justifyContent="space-between"
          alignItems="center"
          key={_id}
        >
          <PhoneIcon color="green" />
          {name} : {phone} : {email}
          <IconButton
            color="red"
            variant="outline"
            icon={<DeleteIcon />}
            onClick={() => {
              handleDelete(_id);
            }}
          ></IconButton>
        </Flex>
      ))}
    </Flex>
  );
};
export default ContactList;
