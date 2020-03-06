import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

//use props
function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number of cakes {numOfCakes}.</h3>
      <button onClick={() => dispatch(buyCake)}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
