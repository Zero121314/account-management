/* eslint-disable react-hooks/exhaustive-deps */
// custom hook emit value after delay time
import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(value);
		}, delay);
		return () => clearTimeout(timeout);
	}, value);

	return debounceValue;
}

export default useDebounce;
