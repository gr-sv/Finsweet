import React, { Fragment, useState } from 'react';
import Navigation from '../../shared/navigation/navigation';
import Button from '../../shared/button/button';
import s from './burger.module.scss'

function Burger () {
	const [isActive, setIsActive] = useState(false);

	return (
		<Fragment>
			<div className={`${s.burger} ${isActive ? s.active : ''}`} onClick={() => setIsActive(false)}>
				<Navigation headerNav className={s.navigation__links} onClick={e => {e.stopPropagation(); e.preventDefault()}} />

				<Button button_clone onClick={e => {e.stopPropagation(); e.preventDefault()}}>Clone Project</Button>

				<div className={s.closeBurger} />
			</div>

			<Button 
				className={s.burgerButton}
				onClick={() => setIsActive(!isActive)}
			>
				<span className={s.burgerButton__line}></span>
			</Button>
		</Fragment>
	)
}

export default Burger;