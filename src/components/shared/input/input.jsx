import React from 'react';
import classNames from 'classnames';
import s from './input.module.scss';

function Input ({
	id,
	className,
	...otherProps
}) {
	return (
		<input
			{...otherProps}
			id={id}
			name={id}
			className={classNames(
				s.input,
				className,
		)}/>
	)
}

export default Input;