import { FormatSelector } from './FormateSelector';
import MonacoEditor from '@monaco-editor/react';
import { convert } from '@/lib/convert';
import { usePreviousValue } from './hooks/usePreviousValue';
import { CopyButton } from './CopyButton';
import { useEffect, useState } from 'react';
import { useIsValid } from './hooks/useIsValid';
import type { Format } from '@/types/Format';

export const Editor = () => {
	const [value, setValue] = useState('');
	const [format, setFormat] = useState<Format>('json');
	const previousFormat = usePreviousValue(format);
	const isValid = useIsValid(value, format);
	const canConvert = !!value && isValid && previousFormat !== format;
	const formatIsDisabled = !!value && !isValid;

	const handleChange = (input: string | undefined) => {
		const value = input ?? '';
		setValue(value);
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
					disabled={formatIsDisabled}
				/>
				<CopyButton text={value} />
			</div>
			<MonacoEditor
				language={format}
				value={value}
				onChange={handleChange}
				onMount={(editor) => editor.focus()}
			/>
		</div>
	);
};
