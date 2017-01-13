import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) {}

  competitions = [];
  lastCompetitions: number[] = [];
  table:any[] = [];

  ngOnInit() {
    let request = this.http.get('http://localhost:3000/competitions/');

    request.subscribe((response: Response) => {
      let lastIds = this.getLastCompetitions();
      let competitions = response.json();
console.log('l', lastIds, competitions);
      this.competitions = competitions.filter(cmp => {
        console.log('cmp', cmp.id, lastIds.includes(cmp.id));
        return !lastIds.includes(cmp.id);
      });
      this.lastCompetitions = competitions.filter(cmp => lastIds.includes(cmp.id));
    })
  }

  getLastCompetitions() {
    let list: any = localStorage.getItem('lastCompetitions');
    list = JSON.parse(list);

    return list && list.length ? list : [];
  }

  getTable(id){
    let request = this.http.get(`http://localhost:3000/competitions/${id}/leagueTable`);

    request.subscribe((response: Response) => {
      this.table = response.json().standing;
      console.log(this.table)
    })
  }

}
