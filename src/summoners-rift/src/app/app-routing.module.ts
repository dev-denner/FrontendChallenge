import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TournamentSettingsComponent } from './pages/tournament-settings/tournament-settings.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { WinnerComponent } from './pages/winner/winner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tournament-settings', component: TournamentSettingsComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'winner', component: WinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
