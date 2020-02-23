import React, {Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    }

    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    const message = state.message === 'Changed' ? 'Changed' : 'LifecycleA'
    return {message: message}
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {//preProps, preState, snapshot are optional
    console.log('LifecycleA componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('LifecycleA componentWillUnmount')
  }

  handleClick = () => {
    this.setState({
      message: 'Changed',
    })
  }

  render() {
    console.log('LifecycleA render')
    return(
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Update</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
