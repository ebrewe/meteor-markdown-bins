import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Link } from 'react-router';
import {Bins} from '../../../imports/collections/bins';

class BinsList extends Component {
  onBinRemove(bin){
    Meteor.call('bins.remove', bin)
  }
  renderList(){
    return this.props.bins.map(bin=>{
      const binUrl = `/bins/${bin._id}`;
      return (
        <li className="list-group-item bin-item" key={bin._id}>
          <Link to={binUrl}>{bin._id}</Link>
          <button
            className="btn btn-danger"
            onClick={()=> this.onBinRemove(bin) }>
              Remove Bin
          </button>
        </li>
      )
    })
  }
  render(){
    return(
      <div className="bins-container">
        <h3>Your Bins</h3>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default createContainer( ()=>{
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');
  return { bins: Bins.find({}).fetch()}
} ,BinsList)
