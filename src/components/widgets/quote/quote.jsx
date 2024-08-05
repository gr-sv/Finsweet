import React from "react";
import Wrapper from "../wrapper/wrapper";
import Image from "../../shared/image/image";
import s from './quote.module.scss'

function Quote () {
	return (
		<section className={`section ${s.quote}`}>
			<Wrapper className={s.wrapper}>
				<h2 className="visually-hidden">Quote</h2>
				<blockquote className={s.bodyQuote}>
					<p className={s.bodyQuote__text}>Edit this text to make it your own. To edit, simply 
						click directly on the text to start adding your own 
						words. You can move the text by dragging and dropping 
						the text</p>

					<div className={s.bodyQuote__author}>
						<p className={s.author__name}>Joheny Andro</p>
						<p className={s.author__place}>Bhubaneswar, Odisha</p>
						<Image
							className={s.author__photo}
							src='/assests/images/avatar_1.jpeg'
							alt='Photo of the author'
							width={48}
							height={48}
						/>
					</div>					
				</blockquote>

				<div>
					Video
				</div>
			</Wrapper>
		</section>
	)
}

export default Quote;