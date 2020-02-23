import React from 'react'
import './myStyle.css'
import styles from './Stylesheet.module.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <p className={`${className} font-xl`}>Stylesheet</p>
      <p className={`${styles.error}`}>Module css</p>
    </div>
  );
}

export default Stylesheet
