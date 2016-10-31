import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount(){
    //render blaze accounts form then append that to the div
    //that is rendered in this component.
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.blaze));
  }
  componentWillUnmount(){
    //find the appended blaze forms and destroy them
    //if you manually adjusted the DOM, you gotta clean that shit up, bro.
    Blaze.remove(this.view);
  }
  render(){
    return(
      <div ref="blaze"></div>
    );
  }
}

export default Accounts;
