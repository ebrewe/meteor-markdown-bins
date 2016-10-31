import React, { Component } from 'react';
import {markdown} from 'markdown';

class BinViewer extends Component {
  render(){
    if(!this.props.bin){
      return <div>Loading</div>
    }
    const rawHTML = markdown.toHTML(this.props.bin.content);
    return(
      <div className="bin-viewer">
        <h5>Output</h5>
        <div className="transpiled-output">
          <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
        </div>
      </div>
    )
  }
}

export default BinViewer;
