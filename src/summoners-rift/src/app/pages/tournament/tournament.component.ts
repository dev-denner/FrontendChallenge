import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ChallengersService } from './../../services/challengers/challengers.service';
import { TournamentService } from './../../services/tournament/tournament.service';
import { IChallengers } from './../../services/challengers/IChallengers';
import { WinnerService } from './../../services/winner/winner.service';


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  public challengers: IChallengers[];
  public matches: any = {};

  constructor(
    private tournamentService: TournamentService,
    private challengersService: ChallengersService,
    private router: Router,
    private winnerService: WinnerService,
  ) { }

  ngOnInit(): void {
    if (!this.tournamentService.getStatusTournament()) {
      this.router.navigateByUrl('/home');
    }

    this.challengers = this.shuffle(this.challengersService.getChallengers());
    this.matches = this.challengersDraw();
  }

  shuffle(array: IChallengers[]): IChallengers[] {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  challengersDraw(): any {
    return {
      one: [
        this.challengers[0],
        this.challengers[1],
      ],
      two: [
        this.challengers[2],
        this.challengers[3],
      ],
      three: [
        this.challengers[4],
        this.challengers[5],
      ],
      four: [
        this.challengers[6],
        this.challengers[7],
      ],
      five: [],
      six: [],
      seven: [],
    };
  }

  roundChampion(challenger: any, match: string, position: number): Promise<boolean> {
    if (match === 'win') {
      this.winnerService.setWinner(challenger);
      return this.router.navigateByUrl('/winner');
    }
    this.matches[match][position] = challenger;
  }

}
