import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import s from './layout.module.scss';

import HomePage from '../../../pages/homePage/homePage';
import MenuPage from '../../../pages/menuPage/menuPage';
import NotFoundPage from '../../../pages/notFoundPage/notFoundPage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />
	},
	{
		path: '/menu',
		element: <MenuPage />
	}
]);

function Layout () {
	return (
		<div className={s.layout}>
			<RouterProvider router={router} />	
		</div>
	);
}

export default Layout;