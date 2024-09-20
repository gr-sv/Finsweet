import React, { useState } from 'react';
import Wrapper from '../wrapper/wrapper.jsx';
import Logo from '../../shared/logo/logo.jsx';
import Navigation from '../../shared/navigation/navigation';
import Button from '../../shared/button/button.jsx';
import s from './header.module.scss';

function Header () {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className={s.header}>
			<Wrapper className={s.wrapper}>
				<nav className={s.navigation}>
					<Logo logoHeader className={s.navigation__logo} />

					
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
				</nav>
			</Wrapper>			
		</header>
	)
}

export default Header;