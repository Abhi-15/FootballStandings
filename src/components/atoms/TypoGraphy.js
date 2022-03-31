import React from 'react';
import variantMapping from '../variantMapping';

function TypoGraphy(props){

	const element = React.createElement(
		variantMapping[props.variant],
		{
			className: props.class,
			onClick: props.onClick,
			onChange: props.onChange	
		},
		props.text
	)

	return element;
}

TypoGraphy.defaultProps = {
	variant: 'p',
	text: '',
	class: 'NoClass',
	onClick: () => {},
	onChange: () => {}
}

export default TypoGraphy;