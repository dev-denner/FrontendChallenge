import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IChallengers } from './../../services/challengers/IChallengers';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-match-challenger',
  templateUrl: './match-challenger.component.html',
  styleUrls: ['./match-challenger.component.scss']
})
export class MatchChallengerComponent implements OnInit {

  @Input() challenger: IChallengers;
  @Output() cbMatchChallenger: EventEmitter<any> = new EventEmitter();

  public iconCaretRight;
  public hasChallenger = false;

  constructor() { }

  ngOnInit(): void {
    this.iconCaretRight = faCaretRight;
  }

  winner(event: any, challenger: any): void {
    this.cbMatchChallenger.emit([challenger]);
    const button = event.target.parentElement.parentElement.querySelectorAll(
      'app-match-challenger',
    );
    button.forEach(bt => bt.querySelector('button').disabled = true);
  }

}
