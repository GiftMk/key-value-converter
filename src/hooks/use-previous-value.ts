import { useEffect, useRef } from 'react';

export const usePreviousValue = <T>(value: T): T => {
	const previousValueRef = useRef(value);

	useEffect(() => {
		previousValueRef.current = value;
	}, [value]);

	return previousValueRef.current;
};
