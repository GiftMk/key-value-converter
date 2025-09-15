import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useState, type FC } from 'react';

type CopyButtonProps = {
	value: string;
};

const ANIMATION_DURATION = 1000;

export const CopyButton: FC<CopyButtonProps> = ({ value }) => {
	const [isCopied, setIsCopied] = useState(false);
	const isDisabled = isCopied || !value;

	const handleCopy = () => {
		navigator.clipboard.writeText(value);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), ANIMATION_DURATION);
	};

	return (
		<Button className='w-fit' onClick={handleCopy} disabled={isDisabled}>
			{isCopied ? <ClipboardCheckIcon /> : <ClipboardIcon />}
		</Button>
	);
};
