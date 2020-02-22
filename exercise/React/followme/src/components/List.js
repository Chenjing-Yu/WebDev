import React from 'react'

function List() {
  const names = ['Josephine', 'Joanna', 'JoJo'];
  const nameList = names.map((name, index) => (<li key={index}>I am {name}.</li>));
  return (
    <div>
      <ul>
        {nameList}
      </ul>
    </div>);
}

export default List
