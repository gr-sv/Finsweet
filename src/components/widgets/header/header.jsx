import React from 'react';
import Wrapper from '../wrapper/wrapper.jsx';
import Logo from '../../shared/logo/logo.jsx';
import Navigation from '../../shared/navigation/navigation';
import Button from '../../shared/button/button.jsx';
import s from './header.module.scss';

function Header () {
	return (
		<header className={s.header}>
			<Wrapper className={s.wrapper}>
				<nav className={s.navigation}>
					<Logo className={s.navigation__logo} />
					<Navigation className={s.navigation__links} />
				</nav>
				<Button button_clone>Clone Project</Button>
			</Wrapper>			
		</header>
	)
}

export default Header;