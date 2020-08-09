import React, {useState} from 'react';
import Button from './button'
import './App.css';

function App() {
  const [values, setValues] = useState({
    position: "top"
  })
  const {position} = values;
  const updatePosition =() =>{
	setValues({...values, position: document.querySelector('#tooltip').value})
  }
  const handleOnMouseOut =() =>{
	console.log("on mouse out")
  }
  const handleOnMouseOver =() =>{
	console.log("on mouse over")
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
		<div>
			<Button
			id="btn"
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
