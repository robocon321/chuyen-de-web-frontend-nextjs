import React, { useState, useEffect, useRef } from "react";
import styles from "./Input.module.css";
import MyUploadAdapter from "../../utils/MyUploadAdapter";

const defaultFunc = () => {};

const Input = ({
  onClick = defaultFunc,
  onChange = defaultFunc,
  isRequire = "false",
  title = "",
  name = "",
  placeholder = "",
  type = "text",
  arrayObj = [],
  valueObj = "",
  defaultValue = "",
  textInnerObj = "",
  id,
}) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={id}
            required={isRequire == "true"}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
          ></textarea>
        );
      case "select":
        return (
          <select
            name={name}
            required={isRequire == "true"}
            onChange={onChange}
            id={id}
            defaultValue={defaultValue}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {arrayObj != null &&
              arrayObj.map((item, index) => (
                <option key={index} value={item[valueObj]}>
                  {item[textInnerObj]}
                </option>
              ))}
          </select>
        );
      case "ckeditor":
        const uploadPlugin = (editor) => {
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return new MyUploadAdapter(loader);
          };
        }
        if (editorLoaded)
          return (
            <CKEditor
              id={id}
              editor={ClassicEditor}
              data={defaultValue}
              onChange={(event, editor) => onChange(editor)}
              config={{
                extraPlugins: [uploadPlugin]
              }}
            />
          );
        else return <div></div>;
      default:
        return (
          <input
            id={id}
            type={type}
            required={isRequire == "true"}
            name={name}
            placeholder={placeholder}
            value={defaultValue}
            onChange={onChange}
          />
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className={
        (isRequire == "true" ? styles.active + " " : "") + styles.input
      }
    >
      <label>{title}</label>
      {renderInput()}
    </div>
  );
};

export default Input;
