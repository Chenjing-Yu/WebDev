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
import RefComponent from './components/RefComponent.js'
import PortalParent from './components/Portal.js'
import Dashboard from './components/Dashboard.js'
import ClickCounter from './components/ClickCounter.js'
import HoverCounter from './components/HoverCounter.js'
import Counter from './components/Counter.js'
import ClickCounter2 from './components/ClickCounter2.js'
import HoverCounter2 from './components/HoverCounter2.js'
import ComponentA from './components/ComponentA.js'

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
        <RefComponent />

        <PortalParent />

        <Dashboard />

        <h4>HOC</h4>
        <ClickCounter />
        <HoverCounter />

        <h4>render props</h4>
        <Counter
          render={(count, incrementCount) => (
            <ClickCounter2
              count={count}
              incrementCount={incrementCount}
           />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounter2
              count={count}
              incrementCount={incrementCount}
           />
          )}
        />

      <h4>Context</h4>
      <ComponentA />
      </div>
    );
  }
}

export default App;
