import { FormatSelector } from './format-selector';
import MonacoEditor from '@monaco-editor/react';
import { convert } from '@/lib/convert';
import { usePreviousValue } from '../hooks/use-previous-value';
import { CopyButton } from './copy-button';
import { useEffect, useState } from 'react';
import { useIsValid } from '../hooks/use-is-valid';
import type { Format } from '@/types/format';
import { useEditorTheme } from '@/hooks/use-editor-theme';
import { ThemeToggle } from './theme-toggle';
import sampleJson from './editor.sample.json';

export const Editor = () => {
	const [value, setValue] = useState(JSON.stringify(sampleJson, null, 2));
	const [format, setFormat] = useState<Format>('json');
	const previousFormat = usePreviousValue(format);
	const isValid = useIsValid(value, format);
	const editorTheme = useEditorTheme();
	const canConvert = !!value && isValid && previousFormat !== format;
	const disableFormatSelector = !!value && !isValid;

	const handleChange = (value: string | undefined) => {
		setValue(value ?? '');
	};

	useEffect(() => {
		if (!canConvert) {
			return;
		}

		const convertedValue = convert(value, previousFormat, format);
		setValue(convertedValue ?? 'Failed to convert.');
	}, [previousFormat, format, value, canConvert]);

	return (
		<div className='flex h-full w-full max-w-5xl flex-col gap-2'>
			<div className='flex w-full items-center justify-center gap-2'>
				<FormatSelector
					value={format}
					onChange={setFormat}
					disabled={disableFormatSelector}
				/>
				<CopyButton value={value} />
				<ThemeToggle />
			</div>
			<MonacoEditor
				className='overflow-hidden rounded-md'
				theme={editorTheme}
				language={format}
				value={value}
				onChange={handleChange}
				onMount={(editor) => editor.focus()}
			/>
		</div>
	);
};
