import React from 'react';

export default function TextInput(props) {
	// Fix this
	let labelText = props.labelText
	let defaultValue = props.defaultValue
	let name = props.name
	let foregroundColor = `hsl(${props.hue}, 50%, ${props.foregroundBrightness}%)`
	let backgroundColor = `hsl(${props.hue}, 50%, ${props.backgroundBrightness}%)`
	let everything = 
		<div className="slider w-100">
			<label htmlFor={name}>{labelText}</label>
			<input name={name} type="text" onChange={props.onChange} defaultValue={defaultValue}
				style={{
					backgroundColor: backgroundColor,
					color: foregroundColor,
					borderColor: foregroundColor
				}}
			
			/>
		</div>
		;
	return everything;

}