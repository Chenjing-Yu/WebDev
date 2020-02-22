import React from 'react';

function Greet({name}) { //props as inputs
  // return <p>Hello {props.name}!</p>
  return React.createElement(
    'div',
    {className: 'greet'}, //properties
    React.createElement('h1', null, 'Hello ' + name) //children
  );
}

export default Greet
