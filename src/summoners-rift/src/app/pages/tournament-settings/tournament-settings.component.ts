import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChallengersService } from './../../services/challengers/challengers.service';
import { TournamentService } from '../../services/tournament/tournament.service'
import { IChallengers } from './../../services/challengers/IChallengers';

@Component({
  selector: 'app-tournament-settings',
  templateUrl: './tournament-settings.component.html',
  styleUrls: ['./tournament-settings.component.scss']
})
export class TournamentSettingsComponent implements OnInit {

  public challengers: IChallengers[];
  public valid = true;

  constructor(
    private challengersService: ChallengersService,
    private tournamentService: TournamentService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.challengers = this.challengersService.getChallengers();
  }

  startTournament(): void {
    if (this.validate()) {
      this.challengersService.updateChallengers(this.challengers);
      this.tournamentService.setStatusTournament(true);
      this.router.navigateByUrl('/tournament');
    }
  }

  validate(): boolean {
    if (this.challengers.some(challenger => !challenger.name)) {
      return this.valid = false;
    }
    return this.valid = true;
  }

}
