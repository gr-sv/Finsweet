import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import s from './layout.module.scss';

import HomePage from '../../../pages/homePage/homePage.jsx';
import MenuPage from '../../../pages/menuPage/menuPage.jsx';
import NotFoundPage from '../../../pages/notFoundPage/notFoundPage.jsx';

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