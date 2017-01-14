import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: Http) {
    this.route.data.subscribe(val => {
      this.homeData = val['home'].json();

      this.competitions = val['competitions'].json();

    });
  }

  competitions = [];
  lastCompetitions: number[] = [];
  table: any[] = [];
  homeData: {} = {};

  ngOnInit() {
    let lastIds = this.getLastCompetitions();
    console.log('l', lastIds, this.competitions);

    this.competitions = this.competitions.filter(cmp => {
      console.log('cmp', cmp.id, lastIds.includes(cmp.id));
      return !lastIds.includes(cmp.id);
    });

    this.lastCompetitions = this.competitions.filter(cmp => lastIds.includes(cmp.id));
  }

  getLastCompetitions() {
    let list: any = localStorage.getItem('lastCompetitions');
    list = JSON.parse(list);

    return list && list.length ? list : [];
  }

}
