import React from 'react';

import Header from './header';
import BinsList from './bins/bins-list';

export default ()=>{
  return(
    <div>
      <Header />
      <div className="container">
        <BinsList />
      </div>
    </div>
  );
}
