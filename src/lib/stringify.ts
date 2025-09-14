import type { Format } from '@/types/format';
import YAML from 'yaml';
import { XMLBuilder } from 'fast-xml-parser';

const xmlBuilder = new XMLBuilder({ format: true });

export const stringify = (value: unknown, type: Format) => {
	switch (type) {
		case 'json': {
			return JSON.stringify(value, null, 2);
		}
		case 'yaml': {
			return YAML.stringify(value);
		}
		case 'xml': {
			return xmlBuilder.build(value);
		}
	}
};
