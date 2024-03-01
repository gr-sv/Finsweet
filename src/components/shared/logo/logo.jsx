import React from 'react';
import s from './logo.module.scss'
import LogoHeader from '../../../assests/icons/logo-header.svg'

function Logo () {
	return (
		<a className={s.logo__link}>
			<img className={s.logo__image} src={LogoHeader} alt="Logo of cafe Finsweet" />
		</a>
	)
}

export default Logo;