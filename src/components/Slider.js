import React from 'react';

export default function Slider(props) {
	// Fix this
	let range = { min: props.sliderMin, max: props.sliderMax }
	let sliderValue = props.sliderValue
	let onChange = props.onChange
	let name = props.name
	let style = props.style
	let everything =
		<div className="wrapper">
			<div className='label w-100'>
				<label htmlFor={name} style={style}>{props.name}: {sliderValue}</label>
			</div>
			<div className="slider w-100">
				<input name={props.name} type="range" min={range.min} max={range.max} value={sliderValue} onChange={onChange} style={style} />
			</div>
		</div>
		;
	return everything;

}