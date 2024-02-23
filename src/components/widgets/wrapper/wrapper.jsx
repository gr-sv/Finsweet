import React from 'react';
import s from './wrapper.module.scss'

function Wrapper ({ children }) {
	return (
		<div className={s.wrapper}>
			{ children }
		</div>
	)
}

export default Wrapper;