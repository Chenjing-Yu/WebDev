import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux' //import from redux/index.js by default

//use props
function IceCreamContainer(props) {
  return (
    <div>
      <h3>Number of icecreams {props.numOfIceCreams}.</h3>
      <button onClick={props.buyIceCream}>Buy icecream</button>
    </div>
  )
}

//props selectors: arrow functions - take state and dispatch,
//return an object which contains required state info and dispatch function
const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

//use react-redux.connect to connect props selectors and the component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IceCreamContainer)
