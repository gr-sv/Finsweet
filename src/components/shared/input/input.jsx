import React from 'react';
import classNames from 'classnames';
import s from './input.module.scss';

function Input ({
	id,
	className,
	label,
	...otherProps
}) {
	return (
		<React.Fragment>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				{...otherProps}
				className={classNames(
					s.input,
					className,
				)}
				id={id}
				name={id}
				placeholder={id}
			/>
		</React.Fragment>
		
	)
}

export default Input;