import React, {useState} from 'react';
import Button from './button';
import Tooltip from './tooltip'
import './App.css';

function App() {
	//using use state hook
  const [values, setValues] = useState({
	position: "top",
	tooltipDisplay: false,
  })
  //destucting values
  const {position, tooltipDisplay} = values;
  //updating position of tooltip
  const updatePosition =() =>{
	setValues({...values, position: document.querySelector('#tooltip').value})
  }
  //removing tooltip display
  const handleOnMouseOut =() =>{
	setValues({...values, tooltipDisplay:false})
  }
  //displaying tooltip
  const handleOnMouseOver =() =>{
	setValues({...values, tooltipDisplay:true})
  }
  
  return (
    <div className="App">
		<h1>Tooltip Display</h1>
		<select
			id = "tooltip"
			defaultValue= {position}
			onChange={updatePosition}
		>
			<option value="top">top</option>
			<option value="right">right</option>
			<option value="bottom">bottom</option>
			<option value="left">left</option>
		</select>
		<div className="buttonDiv">
			{/* rendering tooltip only when its state i.e tooltipdisplay is set true */}
			{tooltipDisplay && <Tooltip position={position} > I am tooltip</Tooltip>}
			<Button
			className = "tooltipbtn"
			onMouseOver={handleOnMouseOver}
			onMouseOut={handleOnMouseOut}
			>
				Hover Me!
			</Button>
		</div>
		
    </div>
  );
}

export default App;
