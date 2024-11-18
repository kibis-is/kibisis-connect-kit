// types
import type { TTheme } from '@types';

export default function useButtonTextColor(theme: TTheme): string {
  return theme === 'dark' ? '#1A202C' : '#FFFFFF';
}
