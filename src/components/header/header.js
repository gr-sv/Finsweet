import React from "react";
import Wrapper from "../wrapper/wrapper.js";
import Logo from '../../logo.js'
import Menu from '../../menu.js'
import Button from "../shared/button/button.js";
import './header.module.scss'

function Header () {
	return (
		<div className="header">
			<Wrapper className="header-wrapper">
				<nav className="navigation">
					<Logo className="navigation__logo" />
					<Menu className="navigation__menu" />
					<Button button__clone>Clone Project</Button>
				</nav>
			</Wrapper>
		</div>
	)
}

export default Header;