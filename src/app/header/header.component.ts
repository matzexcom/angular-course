import { Component, EventEmitter, Output } from '@angular/core';

export type Routes = 'recipe' | 'shopping';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() onNavigate = new EventEmitter<Routes>();
  currentRoute: Routes = 'recipe';

  onRouteChange(route: Routes) {
    this.currentRoute = route;
    this.onNavigate.emit(route);
  }
}
