import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

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

  addContact = newContact => {
    const isUnique = !this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isUnique) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
      }));
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  findContact = event => {
    this.setState({ filter: event.target.value });
  };

  filterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const usersInfo = this.filterContact();
    return (
      <div style={{ padding: '5px 20px' }}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter find={this.findContact} />
        <ContactList users={usersInfo} onDelete={this.deleteContact} />
      </div>
    );
  }
}
