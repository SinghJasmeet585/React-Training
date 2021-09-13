import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Contact from './Contact';
import AddContact from './AddContact';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/contacts')
      .then((response) => setContacts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const saveContact = (newContact) => {
    axios
      .post('http://localhost:3001/contacts', newContact, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.status === 201) {
          setContacts([...contacts, response.data]);
        }
      });
  };

  const deleteContact = (contactId) => {
    axios
      .delete(`http://localhost:3001/contacts/${contactId}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.status === 200) {
          setContacts(contacts.filter((contact) => contact.id !== contactId));
        }
      });
  };

  const editContact = (contactId, data) => {
    axios
      .put(`http://localhost:3001/contacts/${contactId}`, data)
      .then((response) => {
        if (response.status === 200) {
          setContacts(
            contacts.map((contact) =>
              contact.id === contactId ? response.data : contact
            )
          );
        }
      });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 my-4'>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              city={contact.address.city}
              deleteContact={deleteContact}
              editContact={editContact}
            />
          ))}
        </div>
        <div className='col-md-4 my-4'>
          <AddContact addContact={saveContact} />
        </div>
      </div>
    </div>
  );
};

export default ContactList;
