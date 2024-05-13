import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { Observable, Subject } from 'rxjs';

export interface AccountData {
  name: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class AccountDataService {
  constructor(private readonly loggingService: LoggingService) {}
  get accounts(): AccountData[] {
    return this._accounts;
  }
  private _accounts: AccountData[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdate = new Subject<string>();

  addAccount(newAccount: AccountData) {
    this._accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  updateStatus(id: number, newStatus: string) {
    this._accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
    this.statusUpdate.next(newStatus);
  }
}
