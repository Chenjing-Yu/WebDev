import React from 'react'

function Child(props) {
  return <button onClick={() => props.greetHandler('Kitty')}>Child Kitty</button>
}

export default Child
