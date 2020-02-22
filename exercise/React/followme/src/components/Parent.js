import React, {Component} from 'react'
import Child from './Child.js'

class Parent extends Component{
  constructor() {
    super();

    this.state = {
      message: 'greeting'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(child) {
    alert(`This is ${this.state.message} from ${child}.`);
  }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/>
      </div>
    );
  }
}

export default Parent
