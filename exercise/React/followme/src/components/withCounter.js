import React, {Component} from 'react'

function withCounter (WrappedComponent) {
  class WithCounter extends Component{
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
      console.log('WithCounter.render')
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
}



export default withCounter
