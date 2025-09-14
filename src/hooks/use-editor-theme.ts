import { useTheme } from './use-theme';

export const useEditorTheme = () => {
	const { theme } = useTheme();

	switch (theme) {
		case 'dark': {
			return 'vs-dark';
		}
		case 'light': {
			return 'vs';
		}
		case 'system': {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			return prefersDark ? 'vs-dark' : 'vs';
		}
	}
};
