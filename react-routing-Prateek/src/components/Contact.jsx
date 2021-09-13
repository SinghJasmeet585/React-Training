import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Contact = (props) => {
  const history = useHistory();

  const removeContact = () => {
    props.deleteContact(props.id);
  };

  return (
    <div className='card my-5' style={{ width: '18rem' }}>
      <div className='card-body'>
        <div className='d-flex justify-content-end'>
          <div
            // onClick={() => setIsEditMode(!isEditMode)}
            onClick={() => history.push(`/edit/${props.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <i className='fas fa-edit text-primary'></i>
          </div>
          <div
            className='ms-2'
            onClick={removeContact}
            style={{ cursor: 'pointer' }}
          >
            <i className='fas fa-trash text-danger'></i>
          </div>
        </div>

        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>{props.email}</p>
        <p className='card-text'>{props.phone}</p>
        <p className='card-text'>{props.city}</p>
      </div>
    </div>
  );
};

export default Contact;
