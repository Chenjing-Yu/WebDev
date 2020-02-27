import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      click: state.click + 1
    }));
  }

  render() { //Child is still under control of Parent in React tree -> onClick
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.click}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal onClick={this.handleClick}>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  return (
    <div className="modal">
      <button>Click portal</button>
    </div>
  );
}

export default Parent
