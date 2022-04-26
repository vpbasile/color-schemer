import React from 'react';

export default function ColorDisplay(props) {
	function color(hue, saturation, apparentBrightness) {
		return (
			`hsl(${hue},${saturation}%,${apparentBrightness}%)`)
	}

	let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	// let color = props.color;
	let hue = props.hue;
	let foregroundBrightness = props.foreground;
	let backgroundBrightness = props.background;
	let backgroundColor = color(hue,50,backgroundBrightness)
	let foregroundColor = color(hue,100,foregroundBrightness)
	let everything =
		<div className="colorDisplay w-100" style={{
			"backgroundColor": backgroundColor, "color": foregroundColor,
			// "width": "100px", "height": "100px", 
			"border": "1px solid black", "display": "inline-block", "margin": "10px"
		}
		}>
			<h2>{props.text}</h2>
			<ul>
				<li>Background: {backgroundColor}</li>
				<li>Foreground: {foregroundColor}</li>
			</ul>
			{lorem}
		</div>
		;
	return everything;

}