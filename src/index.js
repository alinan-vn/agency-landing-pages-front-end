import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/global/nav/index'
import Footer from './components/global/footer/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <body>
    <Nav />
    <App />
    <Footer />
  </body>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
