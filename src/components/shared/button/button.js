import React from 'react';
import classNames from 'classnames';
import './button.module.scss';

const Button = ({ 
	children,
	className,
	button__clone,
	button__menu,
	button__form,
	disabled,
}) => {
	return (
		<button className={classNames( 'button', className, {
			'button__clone': button__clone,
			'button__menu': button__menu,
			'button__form': button__form,
			'disabled': disabled,
		})}>
			{ children }
		</button>
	);
}

export default Button;