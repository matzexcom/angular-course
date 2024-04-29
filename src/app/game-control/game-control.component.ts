import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() gameTick = new EventEmitter<number>();
  count = 1;
  intervalId: number;
  startGameClicked(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startInterval();
  }

  stopGameClicked(): void {
    this.intervalId && clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  private startInterval() {
    this.intervalId = setInterval(() => {
      this.gameTick.emit(this.count++);
    }, 1000);
  }
}
