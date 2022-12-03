import classNames from 'classnames/bind';
import style from './BaseInput.module.scss';
const cx = classNames.bind(style);
function BaseInput({
	value,
	className = '',
	width = '100%',
	type = 'text',
	onChange,
	placeholder = 'Nhập thông tin',
	error = false,
	errorContent = '',
	...props
}) {
	return (
		<div>
			<input
				style={{ width: width }}
				onChange={(e) => onChange(e.target.value)}
				value={value}
				placeholder={placeholder}
				className={cx('msl-base-input', error ? 'error-field' : '') + ' ' + className}
				{...props}
				type={type}
			/>

			{error ? (
				<div className="d-flex m-t-2">
					<div className={cx('icon-input-error')}></div>
					<span className={cx('input-error-content') + ' fs-13'}>{errorContent}</span>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default BaseInput;
