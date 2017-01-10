import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Component({
    selector: 'app-home',
    templateUrl: './competitions.component.html'

})
export class Competitions implements OnInit {

    constructor(private route: ActivatedRoute, private http: Http) {
        this.route.data.subscribe(val => {
            const data = val['competition'].json();
            if (data.standings) {
                this.groups = true;
                this.table = data.standings;
                this.keys = Object.keys(this.table)
            } else {
                this.leagueCaption = data.leagueCaption;
                this.table = data.standing;
            }

            console.log(this.table)
        });
    }
    
    leagueCaption = '';
    competitions = [];

    table: any[] = [];

    groups: boolean = false

    keys = []

    ngOnInit() {
        console.log("Competitions");
    }


}
