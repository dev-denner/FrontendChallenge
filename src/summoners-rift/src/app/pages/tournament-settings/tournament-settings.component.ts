import { Component, OnInit } from '@angular/core';
import { ChallengersService } from './../../services/challengers/challengers.service';
import { IChallengers } from './../../services/challengers/IChallengers';

@Component({
  selector: 'app-tournament-settings',
  templateUrl: './tournament-settings.component.html',
  styleUrls: ['./tournament-settings.component.scss']
})
export class TournamentSettingsComponent implements OnInit {

  public challengers: IChallengers[];
  public valid = true;

  constructor(private challengersService: ChallengersService) { }

  ngOnInit(): void {
    this.challengers = this.challengersService.getChallengers();
  }
  startTournament(): void {
    if (this.validate()) {
      this.challengersService.updateChallengers(this.challengers);
    }
  }

  validate(): boolean {
    if (this.challengers.some(challenger => !challenger.name)) {
      return this.valid = false;
    }
    return this.valid = true;
  }

}
