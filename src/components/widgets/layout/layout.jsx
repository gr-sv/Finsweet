import classNames from 'classnames';
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './layout.module.scss'

function Layout ({ children }) {
	return (
		<div className={s.layout}>
			<Header />
			<main className={s.main}>
				{children}
			</main>				
			<Footer />
		</div>
	);
}

export default Layout;