import React from 'react';
import { render } from 'react-dom';

const Scroll = (props) => {
  //props children refers to anything is wrapped into a non self closing component. In our case is the cardlist
  return(
    <div className='tc' style = {{overflow: 'scroll', border: '1px solid blue', height: '1000px', width: '70%', margin:'auto'}}>
      {props.children}
    </div>
  );
  }

export default Scroll