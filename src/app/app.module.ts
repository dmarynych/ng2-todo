import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoDataService } from './todo-data.service';
import { CompetitionsService } from './services/competitions.service';
import { TeamsService } from './services/teams.service';
import { PlayersService } from './services/players.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { routing } from './configs/nav.config';

import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { Competitions } from './components/competitions/competitions.component';

import { CompetitionsResolver } from './resolvers/competitions.resolver';
import { TeamsResolver } from './resolvers/teams.resolver';
import { PlayersResolver } from './resolvers/players.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TeamsComponent,
    PlayersComponent,
    Competitions
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TodoDataService, CompetitionsService, CompetitionsResolver, TeamsResolver, TeamsService, PlayersResolver, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
