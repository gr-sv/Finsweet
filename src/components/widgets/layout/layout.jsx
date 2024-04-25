import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './layout.module.scss'

// const router = createBrowserRouter([]);

function Layout ({ children }) {
	return (
		<div className={s.layout}>
			<Header />
			{children}				
			<Footer />
		</div>
	);
}

export default Layout;