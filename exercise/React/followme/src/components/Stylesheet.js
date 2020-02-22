import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      <p className={`${className} font-xl`}>Stylesheet</p>
    </div>
  );
}

export default Stylesheet
