import { Component, Input } from '@angular/core';
import { IChallengers } from './../../services/challengers/IChallengers';

@Component({
  selector: 'app-input-challenger',
  templateUrl: './input-challenger.component.html',
  styleUrls: ['./input-challenger.component.scss']
})
export class InputChallengerComponent {

  @Input() challenger: IChallengers;
  public valid = true;

  constructor() { }

  setName(challenger: IChallengers, event: any): void {
    challenger.name = event.target.value;
  }

  validate(event: any): boolean {
    if (event.target.value.length === 0) {
      return this.valid = false;
    }
    return this.valid = true;
  }

}
