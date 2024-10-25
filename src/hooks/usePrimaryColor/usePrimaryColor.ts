// types
import type { TTheme } from '@types';

export default function usePrimaryColor(theme: TTheme): string {
  return theme === 'dark' ? '#E0B0FF' : '#8D029B';
}
