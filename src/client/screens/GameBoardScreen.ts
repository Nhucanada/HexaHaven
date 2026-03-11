import { ScreenId } from '../../shared/constants/screenIds';
import { TestMapGenScreen } from './TestMapGenScreen';

export class GameBoardScreen {
  readonly id = ScreenId.GameBoard;
  private readonly mapScreen = new TestMapGenScreen();

  render(parentElement: HTMLElement, onComplete?: () => void, navigate?: (screenId: ScreenId) => void): void {
    this.mapScreen.render(parentElement, onComplete, navigate);
  }

  destroy(): void {
    this.mapScreen.destroy();
  }
}
