import React from 'react';
import s from './navigation.module.scss'
import classNames from 'classnames';

function Navigation ({ className }) {
	return (
		<ul className={classNames(s.navigation__list, className)}>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="/home">Home</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="#">Menu</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="#">About us</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="#">Our Story</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="#">Blog</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="#">Contact</a>
			</li>
		</ul>
	)
}

export default Navigation;