import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/NavBar.css';

const styles = {
  display: 'flex',
  "flex-flow": 'row nowrap',
  "justify-content": 'space-between',
  "align-content": 'center',
};

const NavBar = (props) => { 
  return (
    <nav className="navbar" style={styles}>
      {props.children}
    </nav>
  );
};

export default withRouter(NavBar);
