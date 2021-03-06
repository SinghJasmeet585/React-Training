import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-danger navbar-expand-lg'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Contact Manager
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/aboutus' className='nav-link active'>
                About us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-link active'>
                Contact us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link active'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
