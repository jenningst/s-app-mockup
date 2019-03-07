import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = (props) => { 
  return (
    <nav className="navbar">
      {props.children}
    </nav>
  );
};

export default withRouter(NavBar);
