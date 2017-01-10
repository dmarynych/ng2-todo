import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

const apiUrl = 'https://swapi.co/api/';

@Injectable()
export class CompetitionsService {

  constructor(private http: Http) { }

  getCompetitions(id) {
    let request = `http://localhost:3000/competitions/${id}/leagueTable`;

    return this.http.get(request)
  }
}
