// types
import type { TTheme } from '@types';

export default function useSubTextColor(theme: TTheme): string {
  return theme === 'dark' ? 'rgba(255, 255, 255, 0.64)' : '#718096';
}
