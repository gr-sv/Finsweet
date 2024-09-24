import React from 'react';
import Wrapper from '../wrapper/wrapper';
import Logo from '../../shared/logo/logo';
import Navigation from '../../shared/navigation/navigation';
import s from './footer.module.scss'
import Button from '../../shared/button/button';

function Footer () {
	const socials = [
		{
			id: '0',
			linkClass: 'link__fb',
			text: 'Facebook'
		},
		{
			id: '1',
			linkClass: 'link__twitter',
			text: 'Twitter'
		},
		{
			id: '2',
			linkClass: 'link__inst',
			text: 'Instagram'
		},
		{
			id: '3',
			linkClass: 'link__linkedin',
			text: 'LinkedIn'
		}
	]

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
						{socials.map((social) => (
							<a key={social.id} className={`${s.social__link} ${s[social.linkClass]}`} href='#'>
								<span className='visually-hidden'>{social.text}</span>
							</a>
						))}
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