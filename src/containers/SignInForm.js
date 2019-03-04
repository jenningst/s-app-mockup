import React, { useState } from 'react';

const SignInForm = () => {
  // setup our state
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    alert(`form submitted with username [${username}] & password [${password}]`);
  }

  function handleInputChange(e) {
    e.preventDefault();
    let input = e.target.value;

    switch(e.target.name) {
      case 'username':
        setUsername(input);
        break;
      case 'password':
        setPassword(input);
        break;
      default:
        break;
    }
  }
  
  return (
    <form
      className="signin-form"
      onSubmit={handleFormSubmit}
    >
      <h1>Sign In</h1>
      <p>User Name</p>
      <input
        className="signin-form__username"
        type='text'
        name='username'
        placeholder='Enter User Name'
        value={username}
        onChange={handleInputChange}
      />
      <p>Password</p>
      <input
        className="signin-form__password"
        type='text'
        name='password'
        placeholder='Enter User Name'
        value={password}
        onChange={handleInputChange}
      />
      <a href="#0">FORGOT PASSWORD?</a>
      <button type="submit">Sign In</button>
      <p>Don't have an account? <a href="#1">Sign up</a></p>
    </form>
  );
};

export default SignInForm;