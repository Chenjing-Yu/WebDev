const redux = require('redux') //import redux in nodejs syntax
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

//action: an object with type property
//action creater: a function that returns an action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first action',
  }
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: 'second action'
  }
}

//reducer: given previous state and action, return next state
const initialCakeState = {
  numOfCake: 10,
}

const initialIceCreamState = {
  numOfIceCream: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) { //switch by action's type
    case BUY_CAKE: return {
      ...state, //previous state expanded, necessary!!!
      numOfCake: state.numOfCake - 1,
    };
    default: return state;
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) { //switch by action's type
    case BUY_ICE_CREAM: return {
      ...state,
      numOfIceCream: state.numOfIceCream -1,
    }
    default: return state;
  }
}

//combine reducers into a single reducer
//actions are handled by all reducers while some reducers ignore
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

//create the store
const store = createStore(rootReducer)

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
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

//unsubscribe
unsubscribe()
