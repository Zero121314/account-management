import classNames from 'classnames/bind';
import style from './BaseInput.module.scss';
const cx = classNames.bind(style);
function BaseInput({ value, className = '', type = 'text', onChange, placeholder = 'Nhập thông tin', ...props }) {
	return (
		<input
			onChange={(e) => onChange(e.target.value)}
			value={value}
			placeholder={placeholder}
			className={cx('msl-base-input') + ' ' + className}
			{...props}
			type={type}
		/>
	);
}

export default BaseInput;
