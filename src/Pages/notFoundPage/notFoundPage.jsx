import React from 'react';
import Wrapper from "../../components/widgets/wrapper/wrapper";
import s from './notFoundPage.module.scss'
import Header from "../../components/widgets/header/header";
import Footer from "../../components/widgets/footer/footer";

function NotFoundPage () {
	return (
		<React.Fragment>
			<Header />
			<main>
				<Wrapper className={s.wrapper}>
					<h1 className={s.title}>Oops!</h1>
					<p className={s.text}>Sorry, an unexpected error has occurred.</p>
				</Wrapper>
			</main>
			<Footer />
		</React.Fragment>
		
		
		
	);
}

export default NotFoundPage;