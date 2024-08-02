import React from "react";
import Wrapper from "../wrapper/wrapper";

import s from './quote.module.scss'

function Quote () {
	return (
		<section className={`section ${s.quote}`}>
			<Wrapper className={s.wrapper}>
				<h2>Quote</h2>
				<blockquote>
					<p>Edit this text to make it your own. To edit, simply 
						click directly on the text to start adding your own 
						words. You can move the text by dragging and dropping 
						the text</p>
					<p>Joheny Andro</p>
					<p>Bhubaneswar, Odisha</p>
				</blockquote>
			</Wrapper>
		</section>
	)
}

export default Quote;