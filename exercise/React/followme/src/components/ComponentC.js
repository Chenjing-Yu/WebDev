import React, {Component} from 'react'
import {UserConsumer} from './userContext.js'

//Method1: use context provider and consumer, preferred.
class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {userName => (
          <p>ComponentC user: {userName}</p>
        )}
      </UserConsumer>
    );
  }
}

export default ComponentC
