import React, { useState } from 'react';

const UserForm = (props) => {
  const [ showRegister, setShowRegister ] = useState(false);
  function toggleLoginRegister() {
    setShowRegister(!showRegister);
  }

  return (
    <div onClick={ toggleLoginRegister }>
      { props.children(showRegister) }
    </div>
  );
};

export default UserForm;