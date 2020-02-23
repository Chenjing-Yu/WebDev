import React, {Component} from 'react'
import RefElement from './RefElement.js'

class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <RefElement ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus through component reference</button>
      </div>
    )
  }
}

export default RefComponent
