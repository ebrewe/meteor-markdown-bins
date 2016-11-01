import React, { Component, PropTypes } from 'react';
import { createContainer } from 'react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

import BinEditor from './bin-editor';
import BinViewer from './bin-viewer';
import BinShare from './bin-share';

class BinsMain extends Component {

  render(){
    //console.log(this.props.bin) --- sweeeeet
    return(
      <div>
        <BinEditor bin={this.props.bin} />
        <BinViewer bin={this.props.bin} />
        <BinShare bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer ((props)=>{
  const {binId} = props.params; //from router /bins/:binId
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');
  return {bin: Bins.findOne(binId)};
}, BinsMain);
