import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'react-codemirror/node_modules/codemirror/mode/markdown/markdown';

import { Bins } from '../../../imports/collections/bins';

class BinEditor extends Component {
  handleEditorChange(content){
    Meteor.call('bins.update', this.props.bin, content);
  }
  render(){
    if(!this.props.bin){
      return <div>One moment please...</div>
    }
    return(
      <div className="codeMirror-container">
        <h5>Input</h5>
        <CodeMirror
          onChange={(content)=>{this.handleEditorChange(content)}}
          options={{mode:'markdown', lineNumbers:true}}
          value={this.props.bin.content}
          />
      </div>
    );
  }
}

export default BinEditor;
