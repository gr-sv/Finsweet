import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './layout.module.scss';

import HomePage from '../../../pages/homePage/homePage';
import MenuPage from '../../../pages/menuPage/menuPage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <div>404 Not Found</div>
	},
	{
		path: '/menu',
		element: <MenuPage />
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