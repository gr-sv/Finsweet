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
					<Logo logoHeader className={s.navigation__logo} />
					<div className={s.burger}>
						<Navigation headerNav className={s.navigation__links} />
						<Button button_clone>Clone Project</Button>
					</div>
				</nav>
				
			</Wrapper>			
		</header>
	)
}

export default Header;