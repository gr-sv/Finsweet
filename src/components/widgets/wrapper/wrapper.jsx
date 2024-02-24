import React from 'react';
import classNames from 'classnames';
import s from './wrapper.module.scss'

function Wrapper ({ children, className }) {
	return (
		<div className={classNames(s.wrapper, className)}>
			{ children }
		</div>
	)
}

export default Wrapper;