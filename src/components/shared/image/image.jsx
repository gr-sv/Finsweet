import React from 'react';
import classNames from "classnames";
import s from './image.module.scss';

function Image ({ src, alt, className, width, height }) {
	return (
		<img
			className={classNames(s.image, className)}
			src={src}
			alt={alt}
			width={width}
			height={height}
		/>
	)
}

export default Image;