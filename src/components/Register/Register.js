import React, { useState } from 'react';
import './Register.css';

const Register = () => {  
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  // handle form submit; TODO: auth here
  function handleFormSubmit(e) {
    e.preventDefault();
    alert(`form submitted with email [${email}] & password [${password}]`);
  }

  // handle form input changes
  function handleInputChange(e) {
    e.preventDefault();
    let input = e.target.value;

    switch(e.target.name) {
      case 'name':
        setName(input);
        break;
      case 'email':
        setEmail(input);
        break;
      case 'password':
        setPassword(input);
        break;
      default:
        break;
    }
  }
  
  return (
    <div className="register-container">
      <header className="header">
        <h1 className="header__content">Create New Account</h1>
      </header>
      <div className="third-party-auth">
      </div>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <input
          className="form input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="form input"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="form input"
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="sign-in-form__submit" type="submit">Sign In</button>
      </form>
      <footer>
        <div className="footer__content">
          Already have an account? Sign in
        </div>
      </footer>
    </div>
  );
};

export default Register;