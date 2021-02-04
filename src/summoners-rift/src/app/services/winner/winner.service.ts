import { Injectable } from '@angular/core';
import { IChallengers } from './../challengers/IChallengers';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {

  constructor() { }

  setWinner(challenger: IChallengers): void {
    localStorage.setItem('winner', JSON.stringify(challenger));
  }

  getWinner(): IChallengers {
    return JSON.parse(localStorage.getItem('winner'));
  }
}
