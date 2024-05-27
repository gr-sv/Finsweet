import React from 'react';
import Header from '../../components/widgets/header/header';
import Footer from '../../components/widgets/footer/footer';
import Input from '../../components/shared/input/input';

function HomePage () {
	return (
		<React.Fragment>
			<Header />
			<main>
				<h1>Home Page</h1>
				<Input id='name' />
				<Input id='email' />
			</main>
			<Footer />
		</React.Fragment>
		
	);
}

export default HomePage;