import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './BaseButton.module.scss';
const cx = classNames.bind(style);
function BaseButton({ to, href, onClick, className, disable, children, primary, text, ...passProps }) {
	let Comp = 'button';
	var props = {
		onClick,
		...passProps,
	};
	if (to) {
		props.to = to;
		Comp = Link;
	} else if (href) {
		props.href = href;
		Comp = 'a';
	}
	return (
		<Comp
			className={cx('base-button', 'cursor-pointer', { disable }, { primary }, { text }) + ' ' + className}
			{...props}
		>
			<span>{children}</span>
		</Comp>
	);
}

export default BaseButton;
