import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Component({
    selector: 'app-home',
    templateUrl: './competitions.component.html'

})
export class Competitions implements OnInit {

    constructor(
      private route: ActivatedRoute,
      private http: Http
    ) {
        this.route.data.subscribe(val => {
            const data = val['competition'].json();
            const fixtures = val['fixtures'].json();
// TODO create component for fixtures (matches) and mapper with result (win/lose)
            this.fixtures = fixtures;

            if (data.standings) {
                this.groups = true;
                this.table = data.standings;
                this.keys = Object.keys(this.table)
            } else {
                this.leagueCaption = data.leagueCaption;
                this.table = data.standing;
            }

            //console.log(this.table)
        });

      this.route.params.subscribe(params => {
        if (params['id']) {
          this.saveCompetition(params['id']);
        }
      });

    }

    leagueCaption = '';
    //competitions = [];
    fixtures = {};
    table: any[] = [];

    groups: boolean = false

    keys = []

    ngOnInit() {
        console.log("Competitions");
    }

    saveCompetition(id) {
      let list: any = localStorage.getItem('lastCompetitions');
      list = JSON.parse(list);

      if(!list) {
        list = [];
      }

      if(!list.includes(id)) {
        list.push(parseInt(id));
      }

      if(list.length > 2) {
        list.shift();
      }

      localStorage.setItem('lastCompetitions', JSON.stringify(list));
    }

}
