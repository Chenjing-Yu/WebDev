import React, {Component} from 'react'

class RefElement extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <>
        <input type='text' ref={this.inputRef}></input>
        <button onClick={this.focusInput}>Focus</button>
      </>
    )
  }
}

export default RefElement
