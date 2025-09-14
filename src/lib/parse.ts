import type { Format } from '@/types/format';
import YAML from 'yaml';
import { XMLParser } from 'fast-xml-parser';

const xmlParser = new XMLParser();

export const parse = (value: string, type: Format): object | null => {
	try {
		switch (type) {
			case 'json':
				return JSON.parse(value);
			case 'yaml': {
				return YAML.parse(value);
			}
			case 'xml': {
				return xmlParser.parse(value);
			}
		}
	} catch {
		return null;
	}
};
