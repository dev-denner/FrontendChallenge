import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { TournamentSettingsComponent } from './pages/tournament-settings/tournament-settings.component';
import { ChallengersService } from './services/challengers/challengers.service';
import { InputChallengerComponent } from './components/input-challenger/input-challenger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentSettingsComponent,
    InputChallengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    ChallengersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
