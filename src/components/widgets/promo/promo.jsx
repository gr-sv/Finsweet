import React from "react";
import Wrapper from "../wrapper/wrapper";
import Image from '../../shared/image/image';
import { Link } from 'react-router-dom';

import s from './promo.module.scss'

function Promo () {
	return (
		<section className={s.promo}>
			<Wrapper className={s.wrapper}>
				<h1 className='visually-hidden'>Finsweet</h1>
				<div className={s.textWrapper}>
					<h2 className='visually-hidden'>Promo</h2>
					<p className={`intro ${s.promo__intro}`}>We serve high quality foods of all kinds.</p>
					<p className={s.promo__text}>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.</p>
					
					<Link className={`orangeBtnLink ${s.promo__link}`} to="/menu">View Menu</Link>

					<div className={s.time}>
						<h3 className={s.time__title}>Opening Times</h3>
						<p className={s.time__text}>Sunday to Saturday | 09:00 AM to 11:00 PM</p>
					</div>

					<div className={s.place}>
						<h3 className={s.place__title}>Location</h3>
						<p className={s.place__text}>Master canteen, BBSR , Odisha 752054</p>
					</div>
					
					<div className={s.callUs}>
						<h3 className={s.callUs__title}>Call us</h3>
						<a className={s.callUs__link} href='tel:+9776462441'>+9776462441</a>
					</div>							
				</div>
				<Image
					className={s.promo__image}
					src='/assests/images/promo.jpeg'
					alt='Promo image'
					width={622}
					height={683}
				/>
			</Wrapper>
		</section>
	);
}

export default Promo;