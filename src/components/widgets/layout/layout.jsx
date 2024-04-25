import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './layout.module.scss';

import HomePage from '../../../Pages/homePage/homePage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	}
]);

function Layout () {
	return (
		<div className={s.layout}>
			<Header />
			<RouterProvider router={router} />			
			<Footer />
		</div>
	);
}

export default Layout;