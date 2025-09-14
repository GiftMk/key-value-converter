import type { Format } from '@/types/Format';
import YAML from 'yaml';

export const parse = (value: string, type: Format): object | null => {
	try {
		switch (type) {
			case 'json':
				return JSON.parse(value);
			case 'yaml': {
				return YAML.parse(value);
			}
		}
	} catch {
		return null;
	}
};
