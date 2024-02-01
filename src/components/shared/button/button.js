import React from 'react';
import classNames from 'classnames';
import './button.css';

const Button = ({ 
	children,
	className,
	disabled
}) => {
	return (
		<button className={classNames( 'button', className, {
			'disabled': disabled,
		})}>
			{ children }
		</button>
	);
}

export default Button;