import classNames from 'classnames/bind';
import style from './login.module.scss';
import { BaseInput } from '@/base/input';
import { BaseButton } from '@/base/button';
import { useState } from 'react';
const cx = classNames.bind(style);
function Login() {
	const [userName, setUserName] = useState('hung');
	const [password, setPassword] = useState('');

	return (
		<div className="d-flex">
			<div className={cx('img-left')}></div>
			<div className={cx('input-group-right') + ' p-42'}>
				<div className="m-t-48 m-b-16 center bold">Đăng nhập và làm việc với MAC</div>
				<BaseInput
					value={userName}
					onChange={setUserName}
					placeholder="Nhập tài khoản"
					className="m-b-8"
				></BaseInput>
				<BaseInput
					value={password}
					onChange={setPassword}
					placeholder="Nhập mật khẩu"
					type="password"
				></BaseInput>
				<BaseButton className="w-100 m-t-24" disable={!userName || !password} primary>
					Đăng nhập
				</BaseButton>
				<div className="d-flex jus-space-between m-t-12">
					<BaseButton text>Đăng ký</BaseButton>
					<BaseButton text>Quên mật khẩu?</BaseButton>
				</div>
			</div>
		</div>
	);
}

export default Login;
