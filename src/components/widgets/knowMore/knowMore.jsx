import React from "react";
import Wrapper from "../wrapper/wrapper";
import Image from '../../shared/image/image';
import { Link } from 'react-router-dom';

import s from './knowMore.module.scss'

function KnowMore () {
	return (
		<section>
			<Wrapper>
				<div className="text-wrapper">
					<h2>Know more about us</h2>
					<p>We source sustainable & line caught Foods</p>
					<p>Edit this text to make it your own. To edit, simply 
						click directly on the text to start adding your own words. 
						You can move the text by dragging and dropping the text anywhere 
						on the page.</p>

					<div className="feature">
						<h3>10+ People</h3>
						<p>We are Small Team</p>
						<p>Through True Rich Attended does no end it his mother since favourable.</p>
					</div>
					
					<div className="feature">
						<h3>2014</h3>
						<p>We are From</p>
						<p>Through True Rich Attended does no end it his mother since favourable.</p>
					</div>
					
					<div className="feature">
						<h3>200k</h3>
						<p>Served</p>
						<p>Through True Rich Attended does no end it his mother since favourable.</p>
					</div>					
					
					<Link className={`${s.orangeBtnLink} ${s.knowMore__link}`} to="/menu">View Menu</Link>
				</div>
				
				<div className="image-wrapper">
					<Image />

					<Image />
				</div>				
			</Wrapper>
		</section>
	)
}

export default KnowMore;