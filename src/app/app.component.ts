import { Component } from '@angular/core';
import { Routes } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentRoute: Routes = 'recipe';

  changeRoute(newRoute: Routes) {
    this.currentRoute = newRoute;
  }
}
