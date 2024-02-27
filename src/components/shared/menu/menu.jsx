import React from 'react';
import s from './menu.module.scss'

function Menu () {
	return (
		<ul className={s.menu__list}>
			<li className={s.menu__item}>
				<a className={s.menu__link} href="/home">Home</a>
			</li>
			<li className={s.menu__item}>
				<a className={s.menu__link} href="#">Menu</a>
			</li>
			<li className={s.menu__item}>
				<a className={s.menu__link} href="#">About us</a>
			</li>
			<li className={s.menu__item}>
				<a className={s.menu__link} href="#">Our Story</a>
			</li>
			<li className={s.menu__item}>
				<a className={s.menu__link} href="#">Blog</a>
			</li>
			<li className={s.menu__item}>
				<a className={s.menu__link} href="#">Contact</a>
			</li>
		</ul>
	)
}

export default Menu;