import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoDataService } from './todo-data.service';
import { SWService } from './services/sw.service';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { routing } from './configs/nav.config';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { HomeComponent } from './components/home/home.component';
import { NavResolver } from './resolvers/nav.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StarWarsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TodoDataService, SWService, NavResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
