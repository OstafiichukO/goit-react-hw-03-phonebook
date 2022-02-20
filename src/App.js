import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Section from "./components/Section";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const localContacts = localStorage.getItem("contacts");
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  filter = () => {
    const { contacts } = this.state;
    const value = this.state.filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
  };

  addContact = (id, name, number) => {
    const { contacts } = this.state;
    const value = name.toLowerCase();
    contacts.filter((contact) => contact.name.toLowerCase() === value)
      .length === 0
      ? this.setState((prevState) => ({
          contacts: [
            ...prevState.contacts,
            { id: id, name: name, number: number },
          ],
        }))
      : alert(`${name} is already in contacts.`);
  };

  deleteContact = (event) => {
    const { name } = event.target;
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== name),
    });
  };

  handlleFilterContactsByName = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const filtered = this.filter();
    const { filter } = this.state;
    const { addContact, deleteContact, handlleFilterContactsByName } = this;
    return (
      <>
        <Section title={"Phonebook"}>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title={"Contacts"}>
          <Filter filter={filter} onChange={handlleFilterContactsByName} />
          <ContactList contacts={filtered} onClick={deleteContact} />
        </Section>
      </>
    );
  }
}
