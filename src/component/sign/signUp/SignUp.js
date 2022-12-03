import classNames from 'classnames/bind';
import { useState } from 'react';

import style from './SignUp.module.scss';
import { BaseInput } from '@/base/input';
import { BaseButton } from '@/base/button';
import { validateEmail, validatePassword } from '@/base/utilities/axios/funtions/validate';
import { accountService } from '@/services/account/account.serice';
const cx = classNames.bind(style);
function SignUp() {
	const [firstName, setFirstName] = useState({
		value: '',
		error: false,
		errorContent: 'Nhập họ và đệm',
	});
	const [lastName, setLastName] = useState({
		value: '',
		error: false,
		errorContent: 'Nhập tên',
	});
	const [email, setEmail] = useState({
		value: '',
		error: false,
		errorContent: 'Nhập email',
	});
	const [phoneNumber, setPhoneNumber] = useState({
		value: '',
		error: false,
		errorContent: 'Nhập số điện thoại',
	});
	const [password, setPassword] = useState({
		value: '',
		error: false,
		errorContent: 'Nhập mật khẩu',
	});

	/**
	 * Validate infomation
	 */
	const validate = () => {
		let validate = true;
		if (!firstName.value.trim().length) {
			setFirstName((preValue) => ({
				...preValue,
				error: true,
			}));
			validate = false;
		}
		if (!lastName.value.trim().length) {
			setLastName((preValue) => ({
				...preValue,
				error: true,
			}));
			validate = false;
		}
		if (!email.value.trim().length) {
			setEmail((preValue) => ({
				...preValue,
				error: true,
				errorContent: 'Nhập email',
			}));
			validate = false;
		} else if (!validateEmail(email.value.trim())) {
			setEmail((preValue) => ({
				...preValue,
				error: true,
				errorContent: 'Nhập sai định dạng email',
			}));
			validate = false;
		}
		if (!phoneNumber.value.trim().length) {
			setPhoneNumber((preValue) => ({
				...preValue,
				error: true,
			}));
			validate = false;
		}
		if (!password.value.trim().length) {
			setPassword((preValue) => ({
				...preValue,
				error: true,
				errorContent: 'Nhập mật khẩu',
			}));
			validate = false;
		} else if (!validatePassword(password.value.trim())) {
			setPassword((preValue) => ({
				...preValue,
				error: true,
				errorContent: 'Mật khẩu phải ít nhất 8 ký tự. Bao gồm chữ hoa, chữ thường và số',
			}));
			validate = false;
		}
		return validate;
	};

	/**
	 * register account
	 */
	const signUp = async () => {
		if (!validate()) {
			return;
		}
		const user = {
			FullName: `${firstName.value} ${lastName.value}`,
			Email: email.value,
			Password: password.value,
			ConfirmPassword: password.value,
		};
		const result = await accountService.register(user);
		console.log(result);
	};

	/**
	 * change value input
	 * @param {*} field
	 */
	const changeValueInput = (value, field) => {
		switch (field) {
			case 'firstName':
				setFirstName((preValue) => ({
					...preValue,
					value: value,
					error: false,
				}));
				break;
			case 'lastName':
				setLastName((preValue) => ({
					...preValue,
					value: value,
					error: false,
				}));
				break;
			case 'email':
				setEmail((preValue) => ({
					...preValue,
					value: value,
					error: false,
				}));
				break;
			case 'phoneNumber':
				setPhoneNumber((preValue) => ({
					...preValue,
					value: value,
					error: false,
				}));
				break;
			case 'password':
				setPassword((preValue) => ({
					...preValue,
					value: value,
					error: false,
				}));
				break;
			default:
				break;
		}
	};

	return (
		<div className={cx('sign-up')}>
			<div className="logo-black m-l-auto m-r-auto m-t-80"></div>
			<div className="center bold fs-24 m-t-16">Tạo tài khoản</div>
			<div className="center m-t-12">Một tài khoản sử dụng tất cả ứng dụng</div>
			<div className="d-flex m-t-12">
				<BaseInput
					width="225px"
					value={firstName.value}
					onChange={(value) => changeValueInput(value, 'firstName')}
					errorContent={firstName.errorContent}
					error={firstName.error}
					placeholder="Họ và đệm"
					className="m-r-16"
				></BaseInput>
				<BaseInput
					value={lastName.value}
					onChange={(value) => changeValueInput(value, 'lastName')}
					errorContent={lastName.errorContent}
					error={lastName.error}
					placeholder="Tên"
				></BaseInput>
			</div>
			<BaseInput
				value={email.value}
				onChange={(value) => changeValueInput(value, 'email')}
				errorContent={email.errorContent}
				error={email.error}
				placeholder="Email"
				className="m-t-12"
			></BaseInput>
			<BaseInput
				value={phoneNumber.value}
				onChange={(value) => changeValueInput(value, 'phoneNumber')}
				errorContent={phoneNumber.errorContent}
				error={phoneNumber.error}
				className="m-t-12"
				placeholder="Số điện thoại"
			></BaseInput>
			<BaseInput
				value={password.value}
				onChange={(value) => changeValueInput(value, 'password')}
				errorContent={password.errorContent}
				error={password.error}
				className="m-t-12"
				type="password"
				placeholder="Mật khẩu"
			></BaseInput>
			<BaseButton className="m-t-12 w-100" primary onClick={signUp}>
				Đăng ký
			</BaseButton>
			<div className="center m-t-24">
				Bạn đã có tài khoản?
				<BaseButton className="m-l-4" text to="/">
					Đăng nhập
				</BaseButton>
			</div>
		</div>
	);
}

export default SignUp;
