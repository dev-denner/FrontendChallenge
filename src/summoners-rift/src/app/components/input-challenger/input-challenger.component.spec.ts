import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChallengerComponent } from './input-challenger.component';

describe('InputChallengerComponent', () => {
  let component: InputChallengerComponent;
  let fixture: ComponentFixture<InputChallengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChallengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
