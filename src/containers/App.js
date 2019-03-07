import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Courses from './Courses';
import HeaderBar from './HeaderBar';
import Help from './Help';
import Home from './Home';
import IndividualCourse from './IndividualCourse';

const App = () => {
  return (
    <Router>
      <div className="app">
        <HeaderBar />
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/courses" component={IndividualCourse}/>
        <Route path="/help" component={Help}/>
      </div>
    </Router>
  );
}

export default App;
