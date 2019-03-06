import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../UI/Icon';
import './Alert.css';
import ICONS from '../../constants/sampleIcons';

function Alert ({ newMessages, openMessages }) {
  return (
    <div className="messages" onClick={openMessages}>
      {newMessages 
        ? <Icon icon={ICONS.BELLMESSAGE}/>
        : <Icon icon={ICONS.BELL}/>
      }
    </div>
  );
};

Alert.propTypes = {
  newMessages: PropTypes.bool.isRequired,
  openMessages: PropTypes.func.isRequired,
};

export default Alert;