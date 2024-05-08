import React from "react";
import Wrapper from "../../components/widgets/wrapper/wrapper";
import s from './notFoundPage.module.scss'

function NotFoundPage () {
	return (
		<main>
			<Wrapper className={s.wrapper}>
				<h1 className={s.title}>Oops!</h1>
      			<p className={s.text}>Sorry, an unexpected error has occurred.</p>
			</Wrapper>
		</main>
		
		
	);
}

export default NotFoundPage;