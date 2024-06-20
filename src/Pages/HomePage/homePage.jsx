import React from 'react';
import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import Wrapper from '../../components/widgets/wrapper/wrapper';
import Image from '../../components/shared/image/image';
import Button from '../../components/shared/button/button';

import s from './homePage.module.scss';

function HomePage () {
	return (
		<React.Fragment>
			<Header />
			<main>
				<section className={`${s.section} ${s.promo}`}>
					<Wrapper className={s.wrapper}>
						<h1 className='visually-hidden'>Finsweet</h1>
						<div className={s.textWrapper}>
							<h2 className='visually-hidden'>Promo</h2>
							<p className={`${s.intro} ${s.promo__intro}`}>We serve high quality foods of all kinds.</p>
							<p>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.</p>

							<Button>View Menu</Button>

							<div className={s.time}>
								<h3>Opening Times</h3>
								<p>Sunday to Saturday | 09:00 AM to 11:00 PM</p>
							</div>

							<div className={s.place}>
								<h3>Location</h3>
								<p>Master canteen, BBSR , Odisha 752054</p>
							</div>
							
							<div className={s.telephone}>
								<h3>Call us</h3>
								<p>+9776462441</p>
							</div>							
						</div>
						<Image
							src='/assests/images/promo.jpeg'
							alt='Promo image'
							width={622}
							height={683}
						/>
					</Wrapper>
				</section>
			</main>
			<Footer />
		</React.Fragment>
		
	);
}

export default HomePage;