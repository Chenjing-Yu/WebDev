import React, { Component } from "react";
import styles from './Dashboard.module.css'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value: 'old',
    };
    this.changeValue = this.changeValue.bind(this);
  }

  showModal = () => {
    console.log('showModal');
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log('hideModal');
    this.setState({ show: false });
  };

  changeValue(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    console.log('Dashboard.render');
    return (
      <main>
        <h1>React Modal</h1>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
        >
          <h2>Change the value</h2>
          <input
            type='text'
            value={this.state.value}
            onChange={this.changeValue}
          >
          </input>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  console.log('Modal.render');
  console.log('show:' + show);

  return (
    <div style={{display: show?'block':'none'}} className={styles.modal}>
      <section className={styles.modal_main}>
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
