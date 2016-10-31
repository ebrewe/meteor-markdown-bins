import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Accounts from './accounts';
import { Bins } from '../../imports/collections/bins';

export default class Header extends Component {
  onBinCreate(e){
    e.preventDefault();

    Meteor.call('bins.insert', (error, bin)=>{
      const binUrl = `/bins/${bin}`;
      browserHistory.push(binUrl);
    });
  }
  render(){
    return(
      <header>
        <nav className="nav">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Markdown Bins</Link>
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
