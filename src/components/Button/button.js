import React from 'react';
import './button.css';

function Button (props) {
  let buttonClass = `${props.buttonType} button`;

  return (
    <div
      className={buttonClass}
      onClick={props.onClick}>
      {props.buttonText}
    </div>
  )
};

export default Button;
