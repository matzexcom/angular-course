import { Component, OnInit } from '@angular/core';
import {
  AccountData,
  AccountDataService,
} from './services/account-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public showToast = false;
  public toastMessage: string;
  private timer: number;

  constructor(public readonly accountDataService: AccountDataService) {}
  public get accounts(): AccountData[] {
    return this.accountDataService.accounts;
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }): void {
    this.accountDataService.updateStatus(updateInfo.id, updateInfo.newStatus);
  }

  ngOnInit(): void {
    this.accountDataService.statusUpdate.subscribe({
      next: (status) => {
        clearTimeout(this.timer);
        this.toastMessage = `Status changed to ${status}`;
        this.showToast = true;
        this.timer = setTimeout(() => {
          this.showToast = false;
        }, 3000);
      },
    });
  }
}
