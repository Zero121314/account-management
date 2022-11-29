import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '@/routes/routes';
import { Fragment } from 'react';

import './App.scss';
import './base/style/style.scss';
import './base/style/space.scss';
import DefaultLayout from '@/layout/DefaultLayout/default';

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
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
