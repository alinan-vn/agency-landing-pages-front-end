import React from 'react';
import './scss/main.scss';

import Landing from './components/landing_page/index';
import About from './components/about/index';
import Services from './components/services/index';
import Projects from './components/projects/index';
import Team from './components/team/index';
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
        {/* <Route exact path ='/services' component={Services} /> */}
        {/* <Route exact path ='/projects' component={Projects} /> */}
        <Route exact path ='/team' component={Team} />
        <Route exact path ='/contact-us' component={Contact} />
        
      </Router>
    )
  }
}

export default App