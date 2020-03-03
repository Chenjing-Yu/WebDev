const redux = require('redux') //import redux in nodejs syntax
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

//action: an object with type property
//action creater: a function that returns an action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first action',
  }
}

//reducer: given previous state and action, return next state
const initialState = {
  numOfCake: 10,
}

const reducer = (state = initialState, action) => {
  switch(action.type) { //switch by action's type
    case BUY_CAKE: return {
      ...state, //previous state expanded
      numOfCake: state.numOfCake - 1,
    };
    default: return state;
  }
}

//create the store
const store = createStore(reducer)

//access current state via store.getState
console.log('Initial state', store.getState())

//register listener - store.subscribe which returns the unsubscribe function
const unsubscribe = store.subscribe(
  () => console.log('Updated state', store.getState())
)

//dispatch actions via store.dispatch with an action creator
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//unsubscribe
unsubscribe()
