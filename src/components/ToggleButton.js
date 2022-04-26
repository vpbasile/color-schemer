import React from 'react';

export default function ToggleButton(props) {
	// <button type="button" class="btn btn-primary">Primary</button>
	if (props.mode === "dark") {
		return (<button type='button' className="btn btn-primary" onClick={props.toggleMode}>DarkB4Light Mode - Click to toggle</button>)
	}
	else {
		return (
		<button onClick={props.toggleMode} className="btn btn-primary">LightB4Dark Mode - Click to toggle</button>)
	}
}