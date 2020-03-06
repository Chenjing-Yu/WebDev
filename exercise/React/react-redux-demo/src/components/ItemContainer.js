import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux' //import from redux/index.js by default

//use props
function ItemContainer(props) {
  return (
    <div>
      <h3>Number of items {props.numOfItems}.</h3>
      <button onClick={props.buyItem}>Buy item</button>
    </div>
  )
}

//props selectors: arrow functions - take state and dispatch,
//return an object which contains required state info and dispatch function
const mapStateToProps = (state, ownProps) => {
  const itemNumber = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    numOfItems: itemNumber
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction
  }
}

//use react-redux.connect to connect props selectors with the component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemContainer)
