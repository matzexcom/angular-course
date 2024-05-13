import { Component, EventEmitter, Output } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private readonly accountDataService: AccountDataService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountDataService.addAccount({
      name: accountName,
      status: accountStatus,
    });
  }
}
