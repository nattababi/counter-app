import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = ({totalCounters}) => {
  return (<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar
    <span className="badge bage-pill badge-secondary m-2">{totalCounters}</span>
    </a>
  </nav>);
}

 
export default NavBar;