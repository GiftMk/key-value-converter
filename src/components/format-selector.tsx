import { formats, type Format } from '@/types/format';
import type { FC } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

type FormatSelectorProps = {
	value: Format;
	onChange: (type: Format) => void;
	disabled?: boolean;
};

export const FormatSelector: FC<FormatSelectorProps> = ({
	value,
	onChange,
	disabled = false
}) => {
	const handleChange = (value: string) => {
		onChange(value as Format);
	};

	return (
		<Select disabled={disabled} value={value} onValueChange={handleChange}>
			<SelectTrigger className='w-fit uppercase'>
				<SelectValue placeholder='Theme' />
			</SelectTrigger>
			<SelectContent>
				{formats.map((type) => (
					<SelectItem className='uppercase' key={type} value={type}>
						{type}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
