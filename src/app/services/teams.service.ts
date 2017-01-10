import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class TeamsService {

  constructor(private http: Http) { }

  getTeam(id) {
    let request = `http://localhost:3000/teams/${id}`;

    return this.http.get(request)
  }
}
