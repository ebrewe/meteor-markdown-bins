import React, { Component } from 'react';
import Accounts from './accounts';

export default class Header extends Component {

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
              <a  href="#">create bin</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
