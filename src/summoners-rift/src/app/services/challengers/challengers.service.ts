import { Injectable } from '@angular/core';
import { IChallengers } from './IChallengers';

@Injectable({
  providedIn: 'root'
})
export class ChallengersService {

  constructor() {
    this.setChallengers();
  }

  setChallengers(): void {
    const challengers: IChallengers[] = this.getChallengers() || [];
    if (challengers.length === 0) {
      for (let i = 1; i <= 8; i++) {
        challengers.push({ id: i, name: '' });
      }
      this.updateChallengers(challengers);
    }
  }

  getChallengers(): IChallengers[] {
    return JSON.parse(localStorage.getItem('challengers')) || [];
  }

  updateChallengers(challengers: IChallengers[]): void {
    localStorage.setItem('challengers', JSON.stringify(challengers));
  }
}
