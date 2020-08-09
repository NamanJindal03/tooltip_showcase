import React from 'react';

function Button(props) {
  
  const {children, onMouseOut, onMouseOver, className} = props
  return (
    <button
        className={className}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
    >
        {children}

    </button>
  );
}

export default Button;
