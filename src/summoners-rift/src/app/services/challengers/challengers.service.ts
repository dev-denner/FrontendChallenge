import { Injectable } from '@angular/core';
import { IChallengers } from './IChallengers';
import { TournamentService } from '../tournament/tournament.service'

@Injectable({
  providedIn: 'root'
})
export class ChallengersService {

  constructor(private tournamentService: TournamentService) {
    this.setChallengers();
  }

  setChallengers(): void {
    const challengers: IChallengers[] = this.getChallengers();
    if (challengers.length === 0) {
      this.tournamentService.setStatusTournament(false);
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
