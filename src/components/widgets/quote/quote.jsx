import React from "react";
import Image from "../../shared/image/image";
import Button from '../../shared/button/button.jsx';
import s from './quote.module.scss'

function Quote () {
	return (
		<section className={`section ${s.quote}`}>
			<h2 className="visually-hidden">Quote</h2>
			<blockquote className={s.theQuote}>
				<p className={s.theQuote__text}>Edit this text to make it your own. To edit, simply 
					click directly on the text to start adding your own 
					words. You can move the text by dragging and dropping 
					the text</p>

				<div className={s.theQuote__author}>
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

			<div className={s.quote__videoWrapper}>
				<video
					className={s.quote__video}
					poster='/assests/images/video.jpg'
					width={925}
					height={668}
					loop
					muted
				>
					<source src="" type="video/mp4" />
					<source src="" type="video/ogg" />
					<source src="" type="video/webm" />
					Your browser does not support the video tag. Here is a
    				<a href="#" download="video.mp4">link to the video</a> instead.
				</video>
				{/* <div className={s.quote__videoControls}>
					<Button className={s.video__play} id="playpause">
						<span className="visually-hidden">Play/Pause</span>
					</Button>
				</div> */}
			</div>
		</section>
	)
}

export default Quote;