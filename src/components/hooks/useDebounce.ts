import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delayMs: number) => {
	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const timerId = setTimeout(() => setDebounced(value), delayMs);

		return () => clearTimeout(timerId);
	}, [value, delayMs]);

	return debounced;
};
