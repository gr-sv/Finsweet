import Wrapper from "./wrapper";
import Logo from './logo.js'
import Menu from './menu.js'

function Header () {
	return (
		<div className="header">
			<Wrapper className="header-wrapper">
				<nav className="navigation">
					<Logo className="navigation__logo" />
					<Menu className="navigation__menu" />
					<a className="navigation__link" href="/">Clone Project</a>
				</nav>
			</Wrapper>
		</div>
	)
}

export default Header;