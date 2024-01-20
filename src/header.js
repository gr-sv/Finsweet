import Logo from './logo.js'
import Menu from './menu.js'

function Header () {
	return (
		<div className="header">
			<div className="wrapper header-wrapper">
				<nav className="navigation">
					<Logo className="header-logo" />
					<Menu className="header-menu" />
					<a className="navigation__link" href="/">Clone Project</a>
				</nav>
			</div>
		</div>
	)
}

export default Header;