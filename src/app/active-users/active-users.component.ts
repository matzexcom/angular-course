import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: User[];

  constructor(private readonly userService: UserService) {}

  onSetToInactive(id: number) {
    this.userService.changeUserStatus(id, 'inactive');
  }
}
