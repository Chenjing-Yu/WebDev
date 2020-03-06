import React, {useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root');

function IdleTimerContainer () {
  let idleTimerRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onIdle = () => {
    console.log('user is on idle');
    if (!isLoggedIn) return;
    modalIsOpen ? logOut() : setModalIsOpen(true);
    idleTimerRef.reset();
  }

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
  }

  const stayActive = () => {
    setModalIsOpen(false);
    setIsLoggedIn(true);
  }

  return (
    <div>
      <h1>Idle Timer test</h1>
      {isLoggedIn ? <p>Hello Jo!</p> : <p>Hello guest!</p>}
      <Modal isOpen={modalIsOpen}>
        <h3>You've been idle for a while!</h3>
        <p>You are going to be logged out soon.</p>
        <button onClick={logOut}>log out</button>
        <button onClick={stayActive}>stay active</button>
      </Modal>
      <IdleTimer
        ref={ref => idleTimerRef=ref}
        timeout={5 * 1000}
        onIdle={onIdle}
        />
    </div>
  );
}

export default IdleTimerContainer
