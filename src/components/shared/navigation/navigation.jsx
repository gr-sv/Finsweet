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
				<a className={s.navigation__link} href="/menu">Menu</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="/about">About us</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="/our-story">Our Story</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="/blog">Blog</a>
			</li>
			<li className={s.navigation__item}>
				<a className={s.navigation__link} href="/contact">Contact</a>
			</li>
		</ul>
	)
}

export default Navigation;