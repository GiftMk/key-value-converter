import type { Format } from '@/types/format';
import { stringify } from './stringify';
import { parse } from './parse';

export const convert = (
	value: string,
	inputType: Format,
	outputType: Format
): string | null => {
	const parsedValue = parse(value, inputType);

	return parsedValue ? stringify(parsedValue, outputType) : null;
};
