import React from 'react'
import styles from './Input.module.css';

const defaultFunc = () => {};

const Input = ({
  onChange=defaultFunc,
  require=false,
  title='',
  name='',
  placeholder='',
  type='text',
  isTextArea = false
}) => {
  return (
    <div className={(require ? styles.active + ' ' : '') + styles.input}>
      <label>{title}</label>
      {
        isTextArea ? (
          <textarea 
            require={require} 
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            require={require} 
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
      }
    </div>
  )
}

export default Input;