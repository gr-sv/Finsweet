import React from 'react';
import Wrapper from '../wrapper/wrapper';
import Logo from '../../shared/logo/logo';
import Navigation from '../../shared/navigation/navigation';
import s from './footer.module.scss'
import Button from '../../shared/button/button';

function Footer () {
	return (
		<footer className={s.footer}>
			<Wrapper className={s.wrapper_top}>
				<section className={s.navigation}>
					<h2 className="visually-hidden">Navigation</h2>
					<Logo logoFooter className={s.navigation__logo} />
					<Navigation footerNav className={s.navigation__links} />
				</section>
			</Wrapper>

			<Wrapper className={s.wrapper_bottom}>
				<section className={s.copyright}>
					<h2 className="visually-hidden">Copyright</h2>
					<p className={s.copyright__text}>&copy; 2021 Finsweet | All rights reserved.</p>
				</section>

				<section className={s.social}>
					<h2 className="visually-hidden">Social networks</h2>
					<div className={s.social__list}>
						<a className={`${s.social__link} ${s.link__fb}`} href="#">
							<span className="visually-hidden">Facebook</span>
						</a>
						<a className={`${s.social__link} ${s.link__twitter}`} href="#">
							<span className="visually-hidden">Twitter</span>
						</a>
						<a className={`${s.social__link} ${s.link__inst}`} href="#">
							<span className="visually-hidden">Instagram</span>
						</a>
						<a className={`${s.social__link} ${s.link__linkedin}`} href="#">
							<span className="visually-hidden">LinkedIn</span>
						</a>
					</div>
				</section>

				<section className={s.contactUs}>
					<h2 className="visually-hidden">Contact us</h2>
					<Button button_contact className={s.contactsUs__button}>Contact us</Button>
				</section>
			</Wrapper>			
		</footer>
	)
}

export default Footer;