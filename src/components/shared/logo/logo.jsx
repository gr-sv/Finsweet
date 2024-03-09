import React from 'react';
import classNames from 'classnames';
import s from './logo.module.scss';

function Logo ({ src, width, height, logoHeader, logoFooter, className }) {

	if(logoHeader) {
		src ='/assests/icons/logo-header.svg';
		width = 96;
		height = 20;
	}

	if(logoFooter) {
		src ='/assests/icons/logo-footer.svg';
		width = 120;
		height = 24;
	}

	return (
		<a className={classNames(s.link,  className, {
			[logoHeader]: logoHeader,
			[logoFooter]: logoFooter,
			})}
			href="/home"
		>
			<img
				src={src}
				width={width}
				height={height}
				alt="Logo of cafe Finsweet"
			/>
		</a>
	)
}

export default Logo;