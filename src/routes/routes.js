import Login from '@/component/Login-out/Login/Login';
import Register from '@/component/Login-out/Register';
import LayoutCenter from '@/layout/LayoutCenter/layoutCenter';
export const PublicRoutes = [
	{ path: '/', component: Login, layout: LayoutCenter },
	{ path: '/register', component: Register },
];

export const PrivateRoutes = {};
