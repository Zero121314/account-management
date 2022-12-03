import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '@/component/header/Header';
import Sidbar from '@/component/sidebar/Sidebar';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
	return (
		<div>
			<Header></Header>
			<div className="container d-flex">
				<Sidbar></Sidbar>
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
