/*Add playload to action*/
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

//use props
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h3>Number of cakes {props.numOfCakes}.</h3>
      <input type='text'
        value={number}
        onChange={e => setNumber(e.target.value)}
      ></input>
    <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
    </div>
  )
}

//props selectors: arrow functions - take state and dispatch,
//return an object which contains required state info and dispatch function
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

//use react-redux.connect to connect props selectors and the component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCakeContainer)
