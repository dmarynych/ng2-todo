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

  competitions = []

  table:any[] = [];

  ngOnInit() {
    let request = this.http.get('http://localhost:3000/competitions/');    

    request.subscribe((response: Response) => {
      this.competitions = response.json();
    })
  }

  getTable(id){
    let request = this.http.get(`http://localhost:3000/competitions/${id}/leagueTable`);    

    request.subscribe((response: Response) => {
      this.table = response.json().standing;
      console.log(this.table)
    })
  }

}
