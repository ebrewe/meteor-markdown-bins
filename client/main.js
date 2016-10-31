import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

//components
import App from './components/app';

Meteor.startup(()=>{
  ReactDOM.render(<App />, document.getElementById('react-mount'));
})
