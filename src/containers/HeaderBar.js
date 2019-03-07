import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../components/Avatar/Avatar';
import Alert from '../components/Alert/Alert';
import NavBar from './NavBar';
import SearchBar from '../components/SearchBar/SearchBar';
import Icon from '../components/UI/Icon';
import './styles/HeaderBar.css';
import ICONS from '../constants/sampleIcons';

const HeaderBar = () => {

  function openMessages() {
    // TODO: open the messages
  }

  function expandProfile() {
    // TODO: expand the user profile
  }

  return (
    <header className="app-header">
      <div className="icon-group">
        <div className="app-header__logo">
          <b>Course Academy</b>
        </div>
      <NavBar>
        <div className="nav-item">
          <NavLink to="/home">
            <div className="nav-item__content">Home</div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/courses">
            <div className="nav-item__content">Courses</div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/help">
            <div className="nav-item__content">Help</div>
          </NavLink>
        </div>
      </NavBar>
      </div>
      <div className="button-group">
        <SearchBar />
        <Alert newMessages={false} openMessages={openMessages} />
        <Avatar imgUrl={"test"} expandProfile={expandProfile}/>
      </div>
    </header>
  );
};

export default HeaderBar;