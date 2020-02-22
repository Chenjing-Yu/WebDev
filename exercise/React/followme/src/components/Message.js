import React, {Component} from 'react'

class Message extends Component{
  constructor() {
    super();
    this.state = {
      message: 'This is a message.',
      count: 0
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: 'This is the changed message!'
    });
  }

  // changeMessage = () => {
  //   this.setState({
  //     message: 'This is the changed message!'
  //   });
  // };

  increment() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1
      }),
      () => console.log('callback value ', this.state.count) //callback function
    );
    console.log(this.state.count); //executed before the state is updated!!!
  }

  incrementFive() { //the inside five setState statements are put together and executed at once!
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/*<button onClick={this.changeMessage.bind(this)}>Change</button>*/}
        <button onClick={this.changeMessage}>Change</button>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Message;
