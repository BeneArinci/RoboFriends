import React from 'react';
import { render } from 'react-dom';

const Scroll = (props) => {
  //props children refers to anything is wrapped into a non self closing component. In our case is the cardlist
  render(props.children)
}

export default Scroll