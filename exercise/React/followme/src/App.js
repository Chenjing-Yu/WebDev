import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message.js'
import Parent from './components/Parent.js'
import List from './components/List.js'
import Stylesheet from './components/Stylesheet.js'
import Inline from './components/InlineStyle.js'
import Form from './components/Form.js'
import LifecycleA from './components/LifecycleA.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Hello name='Jo' heroName='Superman'/>
        <Hello name='Eva'heroName='Spiderman'/>
        <Welcome name='King'heroName='Flashman'/>
        <Welcome name='Jon'heroName='Ironman'/>
        <Message />
        <Parent />
        <List />
        <Stylesheet primary='true'/>
        <Inline />
        <Form />
        <LifecycleA />
      </div>
    );
  }
}

export default App;
