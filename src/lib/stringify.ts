import type { Format } from '@/types/Format';
import YAML from 'yaml';

export const stringify = (value: unknown, type: Format) => {
	switch (type) {
		case 'json': {
			return JSON.stringify(value, null, 2);
		}
		case 'yaml': {
			return YAML.stringify(value);
		}
	}
};
