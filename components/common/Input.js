import React, { useState, useEffect, useRef } from 'react';
import styles from './Input.module.css';

const defaultFunc = () => {};

const Input = ({
  onChange=defaultFunc,
  isRequire='false',
  title='',
  name='',
  placeholder='',
  type='text',
  arrayObj=[],
  valueObj='',
  textInnerObj=''
}) => {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])


  const renderSwitch = () => {
    switch(type) {
      case 'textarea':
        return (
          <textarea 
            require={isRequire}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        );
      case 'select':
        return (
          <select name={name} require={isRequire} defaultValue='' onChange={onChange}>
            <option value='' disabled hidden>{placeholder}</option>
            {
              arrayObj.map((item, index) => (
                <option key={index} value={item[valueObj]}>{item[textInnerObj]}</option>
              ))
            }
          </select>
        );
      case 'ckeditor':
        if(editorLoaded) return (
          <CKEditor
            editor={ ClassicEditor }
            data={placeholder}
            onChange={onChange}
        />
        );
        else return <div></div>;
      default:
        return (
          <input
            type={type}
            require={isRequire} 
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
    }
  }

  return (
    <div className={(isRequire == 'true' ? styles.active + ' ' : '') + styles.input}>
      <label>{title}</label>
      {renderSwitch()}
    </div>
  )
}

export default Input;