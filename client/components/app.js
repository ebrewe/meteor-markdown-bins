import React from 'react';

import Header from './header';

export default (props)=>{
  return(
    <div>
      <Header />
      <div className="app-container">
        {props.children}
      </div>
    </div>
  );
}
