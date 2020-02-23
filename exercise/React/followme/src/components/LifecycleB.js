import React, {Component} from 'react'

class LifecycleB extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    }

    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return {message: 'LifecycleB'}
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  render() {
    console.log('LifecycleB render')
    return(
      <React.Fragment>
        <p>LifecycleB</p>
      </React.Fragment>
    )
  }
}

export default LifecycleB
