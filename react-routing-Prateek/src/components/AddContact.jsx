import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

// const obj = { a: '1', b: 2 };

// const { a } = obj

const AddContact = ({ addContact }) => {
  const location = useLocation();
  const { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('edit')) {
      setEditMode(true);
      axios.get(`http://localhost:3001/contacts/${id}`).then((response) => {
        const { name, email, phone, address } = response.data;
        setName(name);
        setEmail(email);
        setPhone(phone);
        setCity(address.city);
      });
    }
  }, [id, location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      email,
      phone,
      address: { city },
    };

    if (editMode) {
      axios
        .put(`http://localhost:3001/contacts/${id}`, newContact)
        .then((_) => {
          history.push('/');
        });
    } else {
      addContact(newContact);
      setName('');
      setEmail('');
      setPhone('');
      setCity('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='form-label'>
            Phone
          </label>
          <input
            type='tel'
            className='form-control'
            id='phone'
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='city' className='form-label'>
            City
          </label>
          <input
            type='text'
            className='form-control'
            id='city'
            defaultValue={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
