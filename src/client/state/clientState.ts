import type { ScreenId } from '../../shared/constants/screenIds';

export interface ClientState {
  currentScreen: ScreenId | null;
}

export const clientState: ClientState = {
  currentScreen: null,
};
