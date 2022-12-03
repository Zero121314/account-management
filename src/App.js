import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from '@/routes/routes';
import { Fragment } from 'react';

import './App.scss';
import './base/style/style.scss';
import './base/style/space.scss';
import './base/style/font.scss';
import './style/icon/var-icon.scss';
import DefaultLayout from './layouts/defaultLayout/DefaultLayout';

function App() {
	return (
		<BrowserRouter>
			<div id="App">
				<Routes>
					{PublicRoutes.map((route, index) => {
						const Layout = route.layout === null ? Fragment : route.layout ?? DefaultLayout;
						const Page = route.component;
						return (
							<Route
								path={route.path}
								key={index}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							></Route>
						);
					})}

					{PrivateRoutes.map((route, index) => {
						const Layout = route.layout === null ? Fragment : route.layout ?? DefaultLayout;
						const Page = route.component;
						return (
							<Route
								path={route.path}
								key={index}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							></Route>
						);
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
