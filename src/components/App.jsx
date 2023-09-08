import { Component } from 'react';
import { GlobalStyles } from './globalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Wrap, Heading } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if(storedContacts) {
      this.setState({contacts: JSON.parse(storedContacts)});
    }
  }
  componentDidUpdate() {
    const contactsList = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', contactsList);
  }
  addContact = obj => {
    const isInList = this.state.contacts.some(({ name }) => name === obj.name);
    if (isInList) {
      Notify.failure(`${obj.name} is already in contacts.`);
    } else {
      obj.id = nanoid();
      this.setState(p => {
        return { contacts: [...p.contacts, obj] };
      })
      Notify.success('Contact added!');
    }
  };
  findContact = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .concat(contact.number)
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };
  deleteContact = e => {
    const newList = this.state.contacts.filter((contact) => contact.id !== e.target.id);
    this.setState({contacts: newList});
    Notify.info('Contact deleted!')
  }
  filterSearch = e => {
    this.setState({ filter: e.target.value });
  };
  render() {
    return (
      <Wrap>
        <Heading>Phonebook</Heading>
        <ContactForm addContact={this.addContact} />
        <Heading>Contacts</Heading>
        <Filter searchQuote={this.filterSearch} />
        <ContactList
          data={
            this.state.filter === '' ? this.state.contacts : this.findContact()
          }
          onDelete={this.deleteContact}
        />
        <GlobalStyles />
      </Wrap>
    );
  }
}
