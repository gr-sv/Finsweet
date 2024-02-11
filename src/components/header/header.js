import React from "react";
import Wrapper from "../wrapper/wrapper.js";
import Logo from '../../logo.js'
import Menu from '../../menu.js'
import Button from "../shared/button/button.js";
import s from './header.module.scss'

function Header () {
	return (
		<div className={s.header}>
			<Wrapper className={s.wrapper}>
				<nav className={s.navigation}>
					<Logo className={s.navigation__logo} />
					<Menu className={s.navigation__menu} />
					<Button button_clone>Clone Project</Button>
				</nav>
			</Wrapper>
		</div>
	)
}

export default Header;