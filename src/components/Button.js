import React from 'react';

export default function Button(props) {
	// Fix this
	let value = props.value
	let labelText = props.labelText
	let name = props.name
	let foregroundColor = `hsl(${props.hue}, 50%, ${props.foregroundBrightness}%)`
	let backgroundColor = `hsl(${props.hue}, 50%, ${props.backgroundBrightness}%)`
	let everything = 
		<div className="slider w-100">
			<label htmlFor={name}>{labelText}</label>
			<input name={props.name} type="button" onClick={props.onClick} value={value}
				style={{
					backgroundColor: backgroundColor,
					color: foregroundColor,
					borderColor: foregroundColor,
				}}
			
			/>
		</div>
		;
	return everything;

}