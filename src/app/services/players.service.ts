import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class PlayersService {

  constructor(private http: Http) { }

  getPlayers(id) {
    let request = `http://localhost:3000/players/${id}`;

    return this.http.get(request)
  }
}
