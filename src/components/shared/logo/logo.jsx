import React from 'react';
import classNames from 'classnames';
import s from './logo.module.scss';

function Logo ({ className }) {

	return (
		<a className={classNames(s.link, className)}>
			<img className={s.logo__image} src="/assests/icons/logo-header.svg" alt="Logo of cafe Finsweet" />
		</a>
	)
}

export default Logo;