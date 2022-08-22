import React from 'react';
import './input.css'

const Input = (props) => {
    return (
        <div className='input-geral'>
             <label htmlFor={props.labelFor}>{props.labelTxt}</label><br /><br />
      <input className='input' type={props.inputType} id={props.labelfor}/>
        </div>
    )
}

export default Input