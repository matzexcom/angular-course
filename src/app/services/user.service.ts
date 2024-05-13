import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

export type UserStatus = 'active' | 'inactive';

export interface User {
  id: number;
  name: string;
  status: UserStatus;
}
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private readonly counterService: CounterService) {}

  private users: User[] = [
    { id: 1, name: 'Matthias', status: 'active' },
    { id: 2, name: 'Anna', status: 'active' },
    { id: 3, name: 'Florentin', status: 'inactive' },
    { id: 4, name: 'Klara', status: 'inactive' },
  ];

  public get activeUsers() {
    return this.users.filter((user) => user.status === 'active');
  }

  public get inactiveUsers() {
    return this.users.filter((user) => user.status === 'inactive');
  }

  public changeUserStatus(id: number, status: UserStatus) {
    this.users.forEach((user: User) => {
      if (user.id === id) {
        user.status = status;
        status === 'active'
          ? this.counterService.incrementActiveCount()
          : this.counterService.incrementInactiveCount();
      }
    });
  }
}
