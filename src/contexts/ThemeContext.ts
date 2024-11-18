import { createContext } from 'preact';

// types
import type { TTheme } from '@types';

const ThemeContext = createContext<TTheme>('light');

export default ThemeContext;
