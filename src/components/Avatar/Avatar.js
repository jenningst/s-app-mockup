import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import headshot from './troy-headshot.jpg'; // TODO: replace


function Avatar({ imgUrl, userName, expandProfile }) {
  return (
    <div className="avatar" onClick={expandProfile}>
      <img className="avatar__img" src={headshot} alt="User profile."/>
      <p className="avatar__name">{userName}</p>
    </div>
  );
};

Avatar.propTypes = {
  imgUrl: PropTypes.string,
  userName: PropTypes.string.isRequired,
  expandProfile: PropTypes.func.isRequired,
};

Avatar.defaultProps = {
  imgUrl: '', // TODO: add a default user img url here
}

export default Avatar;