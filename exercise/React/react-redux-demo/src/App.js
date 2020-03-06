import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>cake container using connect (recommended):</h1>
        <CakeContainer />
        <IceCreamContainer />
        <h1>cake container using hooks:</h1>
        <HooksCakeContainer />
        <h1>add payload to buyCake action</h1>
        <NewCakeContainer />
        <h1>use ownProps in prop selectors</h1>
        <ItemContainer cake />
        <ItemContainer />
        <h1>asynchronous action</h1>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
