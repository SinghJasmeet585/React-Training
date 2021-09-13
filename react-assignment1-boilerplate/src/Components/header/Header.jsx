// import React from 'react';

// const Header=()=>{
//     return <h1>Hello World</h1>
// }
// export const dummyFunc=()=>{};
// export default Header;
import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand" >News
  </Link>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link" >Dashboad </Link>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/trending" className="nav-link" >Trending </Link>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/category" className="nav-link" >Category</Link>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/Specific" className="nav-link" >Search news </Link>
      </li>
    </ul>
  </div>
  </nav>
    )
}

