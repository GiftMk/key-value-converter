import type { Format } from '@/types/format';
import { useDebounce } from './use-debounce';
import { useEffect, useState } from 'react';
import { parse } from '@/lib/parse';

export const useIsValid = (value: string, format: Format, intervalMs = 250) => {
	const [isValid, setIsValid] = useState(false);
	const debounced = useDebounce(value, intervalMs);

	useEffect(() => {
		setIsValid(!!parse(debounced, format));
	}, [debounced, format]);

	return isValid;
};
