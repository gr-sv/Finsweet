import Logo from "./logo";
import Menu from "./menu";

function Footer () {
	return (
		<div className="footer">
			<div className="wrapper footer-wrapper">
				<section className="footer-navigation">
					<h2 className="visually-hidden">Navigation</h2>
					<Logo className="footer-logo" />
					<Menu className="footer-menu" />
				</section>

				<section className="copygight">
					<h2 className="visually-hidden">Copyright</h2>
					<p className="copyrigth__text">&copy; 2021 Finsweet | All rights reserved.</p>
				</section>

				<section className="social">
					<h2 className="visually-hidden">Social networks</h2>
					<div className="social__list">
						<a className="social__link" href="#">
							<span className="visually-hidden">Facebook</span>
						</a>
						<a className="social__link" href="#">
							<span className="visually-hidden">Twitter</span>
						</a>
						<a className="social__link" href="#">
							<span className="visually-hidden">Instagram</span>
						</a>
						<a className="social__link" href="#">
							<span className="visually-hidden">LinkedIn</span>
						</a>
					</div>
				</section>

				<section className="contact-us">
					<h2 className="visually-hidden">Contact us</h2>
					<p className="contact-us__text">Contact us</p>
				</section>
			</div>			
		</div>
	)
}

export default Footer;