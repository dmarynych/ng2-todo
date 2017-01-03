import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoDataService } from './todo-data.service';
import { HttpService } from './services/http.service';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { routing } from './configs/nav.config';
import { StarWarsComponent } from './components/star-wars/star-wars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StarWarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TodoDataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
