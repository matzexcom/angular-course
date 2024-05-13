import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  public logStatusChange(status: string): void {
    console.log('A server status changed, new status: ' + status);
  }
}
