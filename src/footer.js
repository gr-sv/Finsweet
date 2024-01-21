import Logo from "./logo";
import Menu from "./menu";

function Footer () {
	return (
		<div className="footer">
			<div className="wrapper footer-wrapper">
				<section className="footer-logo">
					<h2 className="visually-hidden">Logo</h2>
					<Logo className="footer-logo" />
				</section>

				<section className="footer-navigation">
					<h2 className="visually-hidden">Navigation</h2>
					<Menu />
				</section>

				<section className="copygight">
					<h2 className="visually-hidden">Copyright</h2>
					<p className="copyrigth__tex">&copy; 2021 Finsweet | All rights reserved.</p>
				</section>
			</div>			
		</div>
	)
}

export default Footer;