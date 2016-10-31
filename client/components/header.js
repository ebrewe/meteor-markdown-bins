import React, { Component } from 'react';
import Accounts from './accounts';
import { Bins } from '../../imports/collections/bins';

export default class Header extends Component {
  onBinCreate(e){
    e.preventDefault();

    Meteor.call('bins.insert');
  }
  render(){
    return(
      <header>
        <nav className="nav">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Markdown Bins</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
            <li>
              <a  href="#" onClick={(e)=>{this.onBinCreate(e);}}>create bin</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
