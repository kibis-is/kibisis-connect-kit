// types
import type { TTheme } from '@types';

export default function useDefaultTextColor(theme: TTheme): string {
  return theme === 'dark' ? 'rgba(255, 255, 255, 0.80)' : '#4A5568';
}
