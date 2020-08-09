import React, {useState, useEffect} from 'react';
import './App.css';

function Tooltip(props) {
    const [values, setValues] = useState({
        top: "",
        left: "",
    })
    const {children, position } = props;
    const {top, left } = values;
    //setting position of tooltip according to the prop received
    const setPosition = ()=>{
        if(position === 'top'){
            setValues({...values, top:"46px", left:"47%"  })
        }
        else if(position === 'bottom'){
            setValues({...values, top:"144px", left:"47%" })
        }
        else if(position === 'right'){
            setValues({...values, top:"92px", left:"54%" })
        }
        else if(position === 'left'){
            setValues({...values, top:"97px", left:"40%" })
        }
        
    }
    //using useEffect hook and reloading it when position prop changes
    useEffect(()=>{
        setPosition()  
    },[position])

    return (
    <span
    className="tooltip"
    style={{top:top, left:left}}
    
    >
        {children}
    </span>
    );
}

export default Tooltip;
