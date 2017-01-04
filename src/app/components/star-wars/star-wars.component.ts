import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  constructor(public route:ActivatedRoute) {
    this.route.data.subscribe(val => this.keys = Object.keys(val['navList']));
  }

  keys: any[] = [];
  
  ngOnInit() {}

}
