import React from 'react';
import classNames from 'classnames';
import s from './logo.module.scss';
import { Link } from 'react-router-dom';

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
		<Link className={classNames(s.link,  className, {
			[s.logoHeader]: logoHeader,
			[s.logoFooter]: logoFooter,
			})}
			to="/"
		>
			<img
				src={src}
				width={width}
				height={height}
				alt="Logo of cafe Finsweet"
			/>
		</Link>
	)
}

export default Logo;