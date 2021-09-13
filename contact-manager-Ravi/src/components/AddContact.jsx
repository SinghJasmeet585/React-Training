import React, { useState } from 'react';

export default function AddContact(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const submitContact = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      address: { city },
    };
    e.target.reset();
    props.addContact(newContact);
  };

  return (
    <div>
      <form onSubmit={(e) => submitContact(e)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            aria-describedby="name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            aria-describedby="email"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            aria-describedby="city"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
