import Dark from './Dark/Dark';
import Light from './Light/Light';
function Theme({ theme, children }) {
	const Theme = theme ?? 'div';
	return <Theme>{children}</Theme>;
}

export default Theme;
