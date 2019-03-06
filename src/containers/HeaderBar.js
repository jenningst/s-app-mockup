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
      <div className="app-header__logo">
        <b>Course Academy</b>
      </div>
      <SearchBar />
      <NavBar>
        <div className="nav-item">
          <NavLink to="/home">
            <Icon 
              icon={ICONS.HOME}
              height="1"
              width="1"
              iconClass="nav-item__icon"
            />
            <div className="nav-item__content">Home</div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/courses">
            <Icon 
              icon={ICONS.HOME}
              height="1"
              width="1"
              iconClass="nav-item__icon"
            />
            <div className="nav-item__content">Courses</div>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/help">
            <Icon 
              icon={ICONS.HOME}
              height="1"
              width="1"
              iconClass="nav-item__icon"
            />
            <div className="nav-item__content">Help</div>
          </NavLink>
        </div>
      </NavBar>
      <Alert newMessages={false} openMessages={openMessages} />
      <Avatar imgUrl={"test"} userName={"Troy Jennings"} expandProfile={expandProfile}/>
    </header>
  );
};

export default HeaderBar;