import React from 'react';
import Wrapper from '../wrapper/wrapper';
import Logo from '../../shared/logo/logo';
import Menu from '../../shared/menu/menu';

function Footer () {
	return (
		<footer className="footer">
			<Wrapper className="footer-wrapper">
				<section className="footer-navigation">
					<h2 className="visually-hidden">Navigation</h2>
					<Logo className="footer-navigation__logo" />
					<Menu className="footer-navigation__menu" />
				</section>

				<section className="copyright">
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
			</Wrapper>			
		</footer>
	)
}

export default Footer;