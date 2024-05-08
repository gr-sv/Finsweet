import React from "react";
import Wrapper from "../../components/widgets/wrapper/wrapper";
import s from './notFoundPage.module.scss'

function NotFoundPage () {
	return (
		<main>
			<Wrapper className={s.wrapper}>
				<div className={s.text}>404 Not Found</div>
			</Wrapper>
		</main>
		
		
	);
}

export default NotFoundPage;