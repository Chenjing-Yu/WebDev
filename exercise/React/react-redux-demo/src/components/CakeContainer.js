import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux' //import from redux/index.js by default

//use props
function CakeContainer(props) {
  return (
    <div>
      <h3>Number of cakes {props.numOfCakes}.</h3>
      <button onClick={props.buyCake}>Buy cake</button>
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
    buyCake: () => dispatch(buyCake())
  }
}

//use react-redux.connect to connect props selectors with the component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CakeContainer)
