import React from 'react';

const NotFound = () => {
  return (
    <div>
      <img
        src='/assets/404.png'
        alt='404'
        style={{
          width: '100vw',
          height: '90vh',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default NotFound;
