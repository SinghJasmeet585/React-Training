import React from 'react';

export default function Contact(props) {
  const removeContact = (id) => {
    props.deleteContact(id);
  };

  return (
    <div className="card my-5" style={{ width: '18rem' }}>
      <div className="card-body">
        <span
          onClick={() => {
            removeContact(props.id);
          }}
          style={{ float: 'right', cursor: 'pointer' }}
        >
          <i className="fas fa-trash text-danger"></i>
        </span>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.phone}</p>
        <p className="card-text">{props.city}</p>
      </div>
    </div>
  );
}
