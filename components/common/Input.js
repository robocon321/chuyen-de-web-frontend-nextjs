import React from 'react'
import styles from './Input.module.css';

const defaultFunc = () => {};

const Input = ({
  onChange=defaultFunc,
  require='false',
  title='',
  name='',
  placeholder='',
  type='text',
  arrayObj=[],
  valueObj='',
  textInnerObj=''
}) => {
  const renderSwitch = () => {
    switch(type) {
      case 'textarea':
        return (
          <textarea 
            require={require}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        );
      case 'select':
        return (
          <select name={name} defaultValue='' onChange={onChange}>
            <option value='' disabled hidden>{placeholder}</option>
            {
              arrayObj.map((item, index) => (
                <option key={index} value={item[valueObj]}>{item[textInnerObj]}</option>
              ))
            }
          </select>
        );
      default:
        return (
          <input
            type={type}
            require={require} 
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
    }
  }
  return (
    <div className={(require == 'true' ? styles.active + ' ' : '') + styles.input}>
      <label>{title}</label>
      {renderSwitch()}
    </div>
  )
}

export default Input;