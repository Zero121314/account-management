import classNames from 'classnames/bind';

import style from './Header.module.scss';
const cx = classNames.bind(style);
function Header() {
	return (
		<div className={`${cx('header-app')} p-l-24 p-r-24 w-100 d-flex jus-space-between`}>
			<div className="d-flex flex-c-m">
				<div className={`${cx('logo-black')} logo-black`}></div>
				<div className="fs-20 m-t-4 m-l-8 bold">Tài khoản</div>
			</div>

			<div className="d-flex flex-c-m">
				<img src="" className={cx('avatar')} alt="avtar" title="Ten nguoi dung" />
			</div>
		</div>
	);
}

export default Header;
