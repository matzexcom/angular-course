import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private toActiveCounts = 0;
  private toInactiveCounts = 0;

  public incrementActiveCount() {
    this.toActiveCounts += 1;
    console.log(this.toActiveCounts);
  }

  public incrementInactiveCount() {
    this.toInactiveCounts += 1;
    console.log(this.toInactiveCounts);
  }
}
