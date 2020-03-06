import React, {Component} from 'react'
import ComponentB from './ComponentB'
//import {UserProvider} from './userContext.js'

class ComponentA extends Component {
  render() {
    return (
      <div>
        {/*<UserProvider value='Jo'>*/}
          <ComponentB />
        {/*</UserProvider>*/}
      </div>
    );
  }
}

export default ComponentA
