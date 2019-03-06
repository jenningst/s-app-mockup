import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
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
    <div className="sign-in-container">
      <header className="header">
        <h1 className="header__content">Sign In to X</h1>
      </header>
      <div className="third-party-auth">
      </div>
      <form className="sign-in-form" onSubmit={handleFormSubmit}>
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
        <a href="#0">Forgot your password?</a>
        <button className="sign-in-form__submit" type="submit">Sign In</button>
      </form>
      <footer>
        <div className="footer__content">
          Don't have an account? Sign up
        </div>
      </footer>
    </div>
  );
};

export default Login;