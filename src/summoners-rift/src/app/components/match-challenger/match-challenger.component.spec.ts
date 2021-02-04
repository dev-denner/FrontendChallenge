import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchChallengerComponent } from './match-challenger.component';

describe('MatchChallengerComponent', () => {
  let component: MatchChallengerComponent;
  let fixture: ComponentFixture<MatchChallengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchChallengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
