import { Component, OnInit } from '@angular/core';
import { IChallengers } from './../../services/challengers/IChallengers';
import { WinnerService } from './../../services/winner/winner.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  public winner: IChallengers;

  constructor(private winnerService: WinnerService) { }

  ngOnInit(): void {
    this.winner = this.winnerService.getWinner();
  }

}
