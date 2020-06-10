import React from 'react';
import './scss/main.scss';
import Nav from './components/global/nav/index';
import Landing from './components/landing_page/index';
import About from './components/about/index';
import Projects from './components/projects/index';
import Staff from './components/staff/index';
import Contact from './components/contact_us/index';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path ='/' component={Landing} />
        <Route exact path ='/about' component={About} />
        <Route exact path ='/projects' component={Projects} />
        <Route exact path ='/staff' component={Staff} />
        <Route exact path ='/contact-us' component={Contact} />
      </Router>
    )
  }
}

export default App