import React from 'react';
import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import Promo from '../../components/widgets/promo/promo';
import KnowMore from '../../components/widgets/knowMore/knowMore';
import OurMenu from '../../components/widgets/ourMenu/ourMenu';
import s from './homePage.module.scss';


function HomePage () {
	return (
		<React.Fragment>
			<Header />
			<main>
				<Promo />
				<KnowMore />
				<OurMenu />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default HomePage;