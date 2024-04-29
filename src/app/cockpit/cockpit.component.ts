import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Server } from '../server/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverElementAdded = new EventEmitter<Server>();
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef<HTMLInputElement>;
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElementAdded.emit({
      type: 'server',
      name: this.newServerName,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint() {
    this.serverElementAdded.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
