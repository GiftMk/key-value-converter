import { Editor } from './components/editor';
import { Header } from './components/header';
import { ThemeProvider } from './components/theme-provider';

export const App = () => {
	return (
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
			<main className='flex h-full w-full flex-col items-center justify-center gap-8 p-8'>
				<Header />
				<Editor />
			</main>
		</ThemeProvider>
	);
};
