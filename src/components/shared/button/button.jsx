import React from 'react';
import classNames from 'classnames';
import s from './button.module.scss';

const Button = ({ 
	children,
	className,
	button_clone,
	button_menu,
	button_form,
	button_contact,
	disabled,
}) => {
	return (
		<button className={classNames( s.button, className, {
			[s.button_clone]: button_clone,
			[s.button_menu]: button_menu,
			[s.button_form]: button_form,
			[s.button_contact]: button_contact,
			[s.disabled]: disabled,
		})}>
			{ children }
		</button>
	);
}

export default Button;