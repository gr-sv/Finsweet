import React from 'react';
import classNames from 'classnames';
import s from './logo.module.scss'
import LogoHeader from '../../../assests/icons/logo-header.svg'

function Logo ({ className }) {
	return (
		<a className={classNames(s.logo__link, className)}>
			<img className={s.logo__image} src={LogoHeader} alt="Logo of cafe Finsweet" />
		</a>
	)
}

export default Logo;