import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { InlineArray } from '@angular/core/src/linker/view_utils';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
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

      this.allCompetitions = val['competitions'].json();

    });
  }

  allCompetitions: any[] = [];
  competitions: any[] = [];
  lastCompetitions: number[] = [];
  table: any[] = [];
  homeData: {} = {};

  ngOnInit() {
    let lastIds = this.getLastCompetitions();
    console.log('l', lastIds, this.competitions);

    this.competitions = this.allCompetitions.filter(cmp => {
      console.log('cmp', cmp.id, lastIds.includes(cmp.id));
      return !lastIds.includes(cmp.id);
    });

    this.lastCompetitions = this.allCompetitions.filter(cmp => lastIds.includes(cmp.id));
  }

  getLastCompetitions(): any {
    let list: any = localStorage.getItem('lastCompetitions');
    list = JSON.parse(list);

    return list && list.length ? list : [];
  }

}
