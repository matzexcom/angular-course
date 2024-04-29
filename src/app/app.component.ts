import { Component } from '@angular/core';
import { Server } from './server/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverElements: Server[] = [];

  onServerElementAdded(newServer: Server) {
    this.serverElements.push({
      type: newServer.type,
      name: newServer.name,
      content: newServer.content,
    });
  }
}
