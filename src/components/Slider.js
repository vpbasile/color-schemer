import React from 'react';

export default function Slider(props) {
	// Fix this
	let range = {min:props.min, max:props.max}
	let value = props.value
	let onChange = props.onChange
	let name = props.name
	let everything =
		<div className="slider w-100">
			<input name={props.name} type="range" min={range.min} max={range.max} value={value} onChange={onChange} />
			<label htmlFor={name}>{props.name}: {value}</label>
		</div>
		;
	return everything;

}