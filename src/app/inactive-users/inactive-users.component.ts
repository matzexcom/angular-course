import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: User[];

  constructor(private readonly userService: UserService) {}

  onSetToActive(id: number) {
    this.userService.changeUserStatus(id, 'active');
  }
}
