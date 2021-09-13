import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import axios from 'axios';
import AddContact from './AddContact';

export default function ContactList() {
  let [contacts, setContacts] = useState([]);

  const saveContact = (newContact) => {
    console.log('From parent', newContact);
    axios
      .post('http://localhost:3001/contacts', newContact, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        if (response.status === 201) {
          // [...contact, response.data]
          setContacts([...contacts, response.data]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteContact = (id) => {
    console.log('From Parent Delete', id);
    axios
      .delete(`http://localhost:3001/contacts/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setContacts(contacts.filter((contact) => contact.id !== id));
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('First useEffect');
    // Other Logic
    axios
      .get('http://localhost:3001/contacts')
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mt-4">
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              city={contact.address.city}
              deleteContact={deleteContact}
            />
            // <Contact key={contact.id} {...contact} />
          ))}
        </div>
        <div className="col-md-4 mt-4">
          <AddContact addContact={saveContact} />
        </div>
      </div>
    </div>
  );
}
