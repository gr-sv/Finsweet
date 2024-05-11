import React from 'react';
import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';

function HomePage () {
	return (
		<React.Fragment>
			<Header />
			<main>
				<h1>Home Page</h1>
			</main>
			<Footer />
		</React.Fragment>
		
	);
}

export default HomePage;