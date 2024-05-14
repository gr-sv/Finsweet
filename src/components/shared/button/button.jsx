import React from 'react';
import classNames from 'classnames';
import s from './button.module.scss';

function Button ({ 
	children,
	className,
	button_clone,
	button_menu,
	button_form,
	button_contact,
	button_burger,
	disabled,
	...otherProps
}) {
	return (
		<button
			{...otherProps}
			className={classNames( s.button, className, {
				[s.button_clone]: button_clone,
				[s.button_menu]: button_menu,
				[s.button_form]: button_form,
				[s.button_contact]: button_contact,
				[s.disabled]: disabled,
				[s.button_burger]: button_burger,
		})}>
			{ children }
		</button>
	);
}

export default Button;