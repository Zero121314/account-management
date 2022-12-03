import classNames from 'classnames/bind';
import { useState, useRef, forwardRef } from 'react';

import style from './SignIn.module.scss';
import { BaseInput } from '@/base/input';
import { BaseButton } from '@/base/button';
import { accountService } from '@/services/account/account.serice';
import { BaseLocalStorage } from '@/base/utilities/storage/localStorage';
import { keyLocalStorage } from '@/constant/keyLocalStorage';
const cx = classNames.bind(style);
function SignIn() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const logIn = async () => {
		var account = {
			Email: userName,
			Password: password,
		};
		const result = await accountService.loggin(account);
		BaseLocalStorage.Set(keyLocalStorage.Token, result.data);
	};

	return (
		<div className="d-flex">
			<div className={cx('img-left')}></div>
			<div className={cx('input-group-right') + ' p-42'}>
				<div className="logo-black m-l-auto m-r-auto m-t-40"></div>
				<div className="m-t-16 m-b-16 center bold">Đăng nhập và làm việc với MAC</div>
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
				<BaseButton className="w-100 m-t-24" disable={!userName || !password} primary onClick={logIn}>
					Đăng nhập
				</BaseButton>
				<div className="d-flex jus-space-between m-t-12">
					<BaseButton to="/register" text>
						Đăng ký
					</BaseButton>
					<BaseButton text>Quên mật khẩu?</BaseButton>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
