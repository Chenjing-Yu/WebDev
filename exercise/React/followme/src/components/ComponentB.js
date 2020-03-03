import React, {Component} from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext.js'

//Method2: use context type, can only use one type, not recommended.
class ComponentB extends Component {
  render() {
    return (
      <div>
        <p>ComponentB: context: {this.context}</p>
        <ComponentC />
      </div>
    )
  }
}

ComponentB.contextType = UserContext

export default ComponentB
