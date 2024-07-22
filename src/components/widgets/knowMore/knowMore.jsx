import React from "react";
import Wrapper from "../wrapper/wrapper";
import Image from '../../shared/image/image';
import { Link } from 'react-router-dom';

import s from './knowMore.module.scss'

function KnowMore () {
	return (
		<section className={`section ${s.knowMore}`}>
			<Wrapper className={s.wrapper}>
				<div className={s.textWrapper}>
					<h2 className={`title ${s.knowMore__title}`}>Know more about us</h2>
					<p className={`intro ${s.knowMore__intro}`}>We source sustainable & line caught Foods</p>
					<p className={s.knowMore__text}>Edit this text to make it your own. To edit, simply 
						click directly on the text to start adding your own words. 
						You can move the text by dragging and dropping the text anywhere 
						on the page.</p>

					<div className={s.features}>
						<div className={`${s.feature} ${s.feature_first}`}>
							<h3 className={s.feature__title}>10+ People</h3>
							<p className={s.feature__text}>We are Small Team</p>
							<p className={s.feature__text}>Through True Rich Attended does no end it his mother since favourable.</p>
						</div>
						
						<div className={`${s.feature} ${s.feature_second}`}>
							<h3 className={s.feature__title}>2014</h3>
							<p className={s.feature__text}>We are From</p>
							<p className={s.feature__text}>Through True Rich Attended does no end it his mother since favourable.</p>
						</div>
						
						<div className={`${s.feature} ${s.feature_third}`}>
							<h3 className={s.feature__title}>200k</h3>
							<p className={s.feature__text}>Served</p>
							<p className={s.feature__text}>Through True Rich Attended does no end it his mother since favourable.</p>
						</div>
					</div>
										
					<Link className={`orangeBtnLink ${s.knowMore__link}`} to="/menu">View Menu</Link>
				</div>
				
				<div className={s.imageWrapper}>
					<Image
						className={`${s.knowMore__image} ${s.image_first}`}
						src='/assests/images/know-more_1.jpeg'
						alt='Know more image 1'
						width={240}
						height={500}
					/>

					<Image
						className={`${s.knowMore__image} ${s.image_second}`}
						src='/assests/images/know-more_2.jpeg'
						alt='Know more image 2'
						width={240}
						height={500}
					/>
				</div>				
			</Wrapper>
		</section>
	)
}

export default KnowMore;