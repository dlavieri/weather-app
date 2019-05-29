import React from 'react';
import './input.css';
import Button from '../Button/button.js';
import '../Button/button.css';

function Input (props) {
  return (
    <div className='input-wrapper'>
      <div className='input-container'>
      <input
        placeholder='City'
        id = 'cityInput'
        className='input city' />
      <input
        placeholder='Country'
        id = 'countryInput'
        className='input country' />
      <Button
        onClick={props.onClick}
        buttonText="What's the weather?"
        buttonType='Submit' />
      </div>
    </div>
  )
}

export default Input;
