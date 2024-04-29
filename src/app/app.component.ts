import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ticks: number[] = [];
  tickReceived(tick: number) {
    this.ticks.push(tick);
  }
}
