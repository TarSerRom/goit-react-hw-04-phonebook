import React, { useState, useEffect } from "react";

import Section from "./Section/Section.js";
import Form from "./Form/Form.js";
import ContactList from "./ContactList/ContactList.js";
import Filter from "./Filter/Filter.js";
import { nanoid } from "nanoid";


const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? defaultContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} Такой номер уже существует.`);
    } else if (contacts.find((contact) => contact.number === number)) {
      alert(`${number} Такой номер уже существует.`);
    } else {
      setContacts((prevContacts) => [...prevContacts, contact]);
    }
  };

   const deleteContact = e => {
    setContacts(contacts.filter(({ id }) => id !== e.target.id));
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Section>
      <h1>Phonebook</h1>
      <Form onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={getVisibleContacts()}
          onDelete={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Section>
  );
}

export default App;










/*import React, { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";


const startedContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [startedContacts];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

   const addContacts = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number,
        };

        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number === number)) {
            alert(`${number} is already in contacts.`);
        } else if (!name.trim() || !number.trim()) {
            alert("Enter the contact's name and number phone!");
        } else {
            setContacts(prevContacts => [...prevContacts, contact]);
        }
    };
   const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  const changeFilter = e => setFilter(e.target.value);

   const onDeleteContact = idContact => {
        setContacts(contacts.filter(({ id }) => id !== idContact));
    };

  return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={addContacts} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} changeFilter={changeFilter} />

          <ContactList
            contacts={visibleContacts()}
            onDeleteContact={onDeleteContact}
          />
        </Section>
      </>
    );
  
  }; 
*/


/*
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
   
    if (this.state.contacts !== prevState.contacts) {
     
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  nameContactId = nanoid();

  addContacts = (data) => {
    const { contacts } = this.state;

    const names = contacts.map((contact) => contact.name);

    names.includes(data.name)
      ? alert(`${data.name} is already in contact`)
      : this.setState((prevState) => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  deleteContacts = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormalized = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContacts} />
        </Section>

        <Section title="Contacts">
          <Filter filter={this.state.filter} changeFilter={this.changeFilter} />

          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContacts}
          />
        </Section>
      </>
    );
  }
}
*/
//export default App;