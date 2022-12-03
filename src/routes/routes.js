import LayoutCenter from '@/layouts/layoutCenter/LayoutCenter';
import SignIn from '@/component/sign/signIn/SignIn';
import SignUp from '@/component/sign/signUp/SignUp';
import Home from '@/component/home/Home';
export const PublicRoutes = [
	{ path: '/login', component: SignIn, layout: LayoutCenter },
	{ path: '/register', component: SignUp, layout: LayoutCenter },
];

export const PrivateRoutes = [
	{ path: '/', component: Home },
	{ path: '/info', component: Home },
	{ path: '/security', component: Home },
];
