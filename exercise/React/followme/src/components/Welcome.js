import React, {Component} from 'react'

class Welcome extends Component {
  render() { //no input, access props via 'this'
    const {heroName} = this.props;
    return <h1>Welcome, {heroName}!</h1>
  }
}

export default Welcome
