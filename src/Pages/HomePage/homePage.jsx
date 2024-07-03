import React from 'react';
import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import Promo from '../../components/widgets/promo/promo';

import s from './homePage.module.scss';

function HomePage () {
	return (
		<React.Fragment>
			<Header />
			<main>
				<Promo />
				
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default HomePage;