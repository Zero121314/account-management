import Header from '@/component/Header/header';
import Sidbar from '@/component/Sidebar/sidebar';

function DefaultLayout({ children }) {
	return (
		<div>
			<Header></Header>
			<div className="container">
				<Sidbar></Sidbar>
				<div className="content">{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
