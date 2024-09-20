import React, { useState } from 'react';
import Wrapper from '../wrapper/wrapper.jsx';
import Logo from '../../shared/logo/logo.jsx';

import Burger from '../burger/burger.jsx';
import s from './header.module.scss';

function Header () {
	return (
		<header className={s.header}>
			<Wrapper className={s.wrapper}>
				<nav className={s.navigation}>
					<Logo logoHeader className={s.navigation__logo} />

					<Burger />					
				</nav>
			</Wrapper>			
		</header>
	)
}

export default Header;