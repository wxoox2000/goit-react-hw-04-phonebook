import { GlobalStyles } from './globalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Wrap, Heading } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect, useMemo } from 'react';

export const App = () => {
  const baseContacts = useMemo(() => [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ], []);
  const [contacts, setContacts] = useState(baseContacts);
  const [filter, setfilter] = useState('');
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if(storedContacts) {
      const savedContacts = JSON.parse(storedContacts);
      setContacts(savedContacts);
    }
  }, [])
  
  useEffect(() => {
    if(baseContacts !== contacts){
      const contactsList = JSON.stringify(contacts);
      localStorage.setItem('contacts', contactsList);  
    }
  }, [contacts, baseContacts]);
  const addContact = obj => {
    const isInList = contacts.some(({ name }) => name === obj.name);
    if (isInList) {
      Notify.failure(`${obj.name} is already in contacts.`);
    } else {
      obj.id = nanoid();
      setContacts([...contacts, obj])
      Notify.success('Contact added!');
    }
  };
  const findContact = () => {
    return contacts.filter(contact => {
      return contact.name
        .concat(contact.number)
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
  };
  const deleteContact = e => {
    const newList = contacts.filter((contact) => contact.id !== e.target.id);
    setContacts(newList);
    Notify.info('Contact deleted!')
  }
  const filterSearch = e => {
    setfilter(e.target.value);
  };
    return (
      <Wrap>
        <Heading>Phonebook</Heading>
        <ContactForm addContact={addContact} />
        <Heading>Contacts</Heading>
        <Filter searchQuote={filterSearch} />
        <ContactList
          data={
            filter === '' ? contacts : findContact()
          }
          onDelete={deleteContact}
        />
        <GlobalStyles />
      </Wrap>
    );
}
