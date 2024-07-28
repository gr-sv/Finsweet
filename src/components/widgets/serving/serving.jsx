import React from "react";
import Wrapper from "../wrapper/wrapper";
import { Link } from "react-router-dom";
import Image from "../../shared/image/image";

import s from './serving.module.scss'

function Serving () {
	return (
		<section className={`section ${s.serving}`}>
			<Wrapper className={s.wrapper}>
				<h2 className={`title ${s.serving__title}`}>What we are serving</h2>
				<div className={s.textWrapper}>
					<p className={`intro ${s.serving__intro}`}>We all have to eat, so why not do it beautifully?</p>
					<p className={s.serving__text}>Through True Rich Attended does no end it his mother since 
						favourable real had half every him case in packages enquire we up ecstatic.. Through 
						True Rich Attended does no end it his mother</p>
				</div>

				<div className={s.serving__list}>
					<div className={s.serving__item}>
						<h3 className={s.item__title}>Quafe Cake</h3>
						<p className={s.item__text}>Through True Rich Attended no end it his mother since 
							favourable real had half every him.</p>
					</div>

					<div className={s.serving__item}>
						<h3 className={s.item__title}>Cofee</h3>
						<p className={s.item__text}>Through True Rich Attended no end it his mother since 
							favourable real had half every him.</p>
					</div>

					<div className={s.serving__item}>
						<h3 className={s.item__title}>Fast Food</h3>
						<p className={s.item__text}>Through True Rich Attended no end it his mother since 
							favourable real had half every him.</p>
					</div>

					<div className={s.serving__item}>
						<h3 className={s.item__title}>Cocktails</h3>
						<p className={s.item__text}>Through True Rich Attended no end it his mother since 
							favourable real had half every him.</p>
					</div>

					<div className={s.serving__item}>
						<h3 className={s.item__title}>Grill</h3>
						<p className={s.item__text}>Through True Rich Attended no end it his mother since 
							favourable real had half every him.</p>
					</div>

					<div className={s.serving__item}>
						<h3 className={s.item__title}>Snacks</h3>
						<p className={s.item__text}>Through True Rich Attended no end it his mother since 
							favourable real had half every him.</p>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default Serving;
