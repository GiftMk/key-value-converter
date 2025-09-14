import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useState, type FC } from 'react';

type CopyButtonProps = {
	text: string;
};

const ANIMATION_DURATION = 1000;

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
	const [isCopied, setIsCopied] = useState(false);
	const isDisabled = isCopied || !text;

	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), ANIMATION_DURATION);
	};

	return (
		<Button className='w-fit' onClick={handleCopy} disabled={isDisabled}>
			{isCopied ? <ClipboardCheckIcon /> : <ClipboardIcon />}
		</Button>
	);
};
