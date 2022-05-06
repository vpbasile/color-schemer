import React from 'react';

export default function Button(props) {
	// Fix this
	let value = props.value
	let name = props.name
	let everything =
		<div className="slider w-100">
			<input name={props.name} type="button" onClick={props.onClick} value={value}
				style={{
					backgroudColor: `hsl(${props.hue}, 50%, ${props.background}%)`,
					color: `hsl(${props.hue}, 50%, ${props.foreground}%)`
				}}
			
			/>
			<label htmlFor={name}>{props.name}: {value}</label>
		</div>
		;
	return everything;

}