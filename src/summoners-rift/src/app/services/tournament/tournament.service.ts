import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() { }

  setStatusTournament(status: boolean): void {
    localStorage.setItem('tournament', JSON.stringify(status));
  }

  getStatusTournament(): boolean {
    return JSON.parse(localStorage.getItem('tournament'));
  }

}
