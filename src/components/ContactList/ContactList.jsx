import { Delete, List, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { deleteContact } from 'redux/contact/operations';
import { selectFilter, selectContacts } from 'redux/contact/selectors';

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
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Delete
            onClick={() => {
              handleDelete(id);
            }}
          >
            <TiDelete
              style={{
                color: 'tomato',
                fontSize: '36px',
                marginBottom: '-4px',
              }}
            />
          </Delete>
          {name} : {number}
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
