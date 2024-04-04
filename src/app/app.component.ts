import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello World';
  username = 'Hello World';
  showDetails = false;
  showDetailsBtnClicks: number[] = [];

  onResetClick(): void {
    this.username = '';
  }

  onDisplayDetailsClick(): void {
    this.showDetails = !this.showDetails;
    this.showDetailsBtnClicks.push(Date.now());
  }
}
