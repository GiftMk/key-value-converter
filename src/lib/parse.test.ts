import { describe, expect, it } from 'vitest';
import { parse } from './parse';

describe('parse', () => {
	it('can parse a JSON string', () => {
		const value = `
    {
      "name":"john doe",
      "age":30
    }
    `;

		const parsedValue = parse(value, 'json');

		expect(parsedValue).toStrictEqual({
			name: 'john doe',
			age: 30
		});
	});

	it('can parse a YAML string', () => {
		const value = `
    name: jim doe
    age: 13
    `;

		const parsedValue = parse(value, 'yaml');

		expect(parsedValue).toStrictEqual({
			name: 'jim doe',
			age: 13
		});
	});

	it('can parse an XML string', () => {
		const value = `
    <root>
      <name>sally doe</name>
      <age>22</age>
    </root>
    `;

		const parsedValue = parse(value, 'xml');

		expect(parsedValue).toStrictEqual({
			root: {
				name: 'sally doe',
				age: 22
			}
		});
	});
});
