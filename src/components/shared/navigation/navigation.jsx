import React from 'react';
import s from './navigation.module.scss'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Navigation ({ className, headerNav, footerNav, ...otherProps }) {
	return (
		<ul
			{...otherProps}
			className={classNames(className, {
				[s.headerNav]: headerNav,
				[s.footerNav]: footerNav,
		})}>
			<li className={s.navigation__item}>
				<Link className={s.navigation__link} to="/">Home</Link>
			</li>
			<li className={s.navigation__item}>
				<Link className={s.navigation__link} to="/menu">Menu</Link>
			</li>
			<li className={s.navigation__item}>
				<Link className={s.navigation__link} to="/about">About us</Link>
			</li>
			<li className={s.navigation__item}>
				<Link className={s.navigation__link} to="/our-story">Our Story</Link>
			</li>
			<li className={s.navigation__item}>
				<Link className={s.navigation__link} to="/blog">Blog</Link>
			</li>
			<li className={s.navigation__item}>
				<Link className={s.navigation__link} to="/contact">Contact</Link>
			</li>
		</ul>
	)
}

export default Navigation;