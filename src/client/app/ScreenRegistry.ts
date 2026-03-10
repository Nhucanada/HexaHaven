import type { ScreenId } from '../../shared/constants/screenIds';

const screens = new Map<ScreenId, unknown>();

export function registerScreen(id: ScreenId, screen: unknown): void {
  screens.set(id, screen);
}

export function getScreen(id: ScreenId): unknown | undefined {
  return screens.get(id);
}
