import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// third party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// pages
import { HomeComponent } from './pages/home/home.component';
import { TournamentSettingsComponent } from './pages/tournament-settings/tournament-settings.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { WinnerComponent } from './pages/winner/winner.component';

// components
import { InputChallengerComponent } from './components/input-challenger/input-challenger.component';
import { MatchChallengerComponent } from './components/match-challenger/match-challenger.component';

// services
import { ChallengersService } from './services/challengers/challengers.service';
import { TournamentService } from './services/tournament/tournament.service';
import { WinnerService } from './services/winner/winner.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentSettingsComponent,
    TournamentComponent,
    InputChallengerComponent,
    MatchChallengerComponent,
    WinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    ChallengersService,
    TournamentService,
    WinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
