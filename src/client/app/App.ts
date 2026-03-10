export class App {
  constructor(private root: HTMLElement) {}

  start(): void {
    this.root.dataset.ready = 'true';
  }
}
