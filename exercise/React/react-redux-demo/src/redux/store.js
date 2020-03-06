import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import {createLogger} from 'redux-logger' //import by the name
import thunk from 'redux-thunk'

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store
