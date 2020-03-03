import React, {Component} from 'react'

class Counter extends Component{
  constructor(props) {
    super(props);
    this.state={
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState(preState => ({
      count: preState.count + 1,
    }));
  }

  render() {
    console.log('Counter.render using render prop');
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

export default Counter
