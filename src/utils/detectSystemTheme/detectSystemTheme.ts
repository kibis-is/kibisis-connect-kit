// types
import type { TTheme } from '@types';

export default function detectSystemTheme(): TTheme {
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
