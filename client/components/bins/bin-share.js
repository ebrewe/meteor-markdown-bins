import React, { Component } from 'react';
import { Bin } from '../../../imports/collections/bins';

class BinShare extends Component {
  onShareClick(){
    const shareEmail = this.refs.share.value;
    if( !shareEmail.length ) return false;
    Meteor.call('bins.share', this.props.bin, shareEmail);
    this.refs.share.value = '';
  }
  renderShareList(){
    return this.props.bin.sharedWith.map(email=>{
      return (
        <button  key={email} className="btn btn-default">{email}</button>
      );
    })
  }
  render(){
    if(!this.props.bin){
      return <div>Loading</div>
    }
    return(
      <footer className="bin-share">
        <div className="input-group">
            <input ref="share" className="form-control" />
            <div className="input-group-btn">
              <button className="btn btn-default" onClick={this.onShareClick.bind(this)}>
                Share Bin
              </button>
            </div>
        </div>
        <div className="shared-with">
          <h4>Shared With:</h4>
          {this.renderShareList()}
        </div>
      </footer>
    );
  }
}

export default BinShare;
