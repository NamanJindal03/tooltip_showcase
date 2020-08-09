import React, {useState} from 'react';
import './App.css';

function Button(props) {
  const [values, setValues] = useState({
    position: "top"
  })
  const {position} = values;
  const {children, onMouseOut, onMouseOver} = props
  return (
    <button
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
    >
        {props.children}

    </button>
  );
}

export default Button;
