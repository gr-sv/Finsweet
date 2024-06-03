import React from 'react';
import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import Wrapper from '../../components/widgets/wrapper/wrapper';
import Image from '../../components/shared/image/image';
import Button from '../../components/shared/button/button';

import s from './homePage.module.scss'

function HomePage () {
	return (
		<React.Fragment>
			<Header />
			<main>
				<section className={`${s.section} ${s.promo}`}>
					<Wrapper>
						<h1 className='visually-hidden'>Finsweet</h1>
						<div>
							<h2 className='visually-hidden'>Promo</h2>
							<p className={`${s.title} ${s.promo__title}`}>We serve high quality foods of all kinds.</p>
							<p>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.</p>
							<Button>View Menu</Button>
							<p>Opening Times</p>
							<p>Sunday to Saturday | 09:00 AM to 11:00 PM</p>
							<p>Location</p>
							<p>Master canteen, BBSR , Odisha 752054</p>
							<p>Call us</p>
							<p>+9776462441</p>
						</div>
						<Image />
					</Wrapper>
				</section>
			</main>
			<Footer />
		</React.Fragment>
		
	);
}

export default HomePage;