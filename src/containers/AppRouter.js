import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import ForgotPassword from './ForgotPassword';
import App from './App';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/app" component={App}/>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
