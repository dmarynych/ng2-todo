import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Response } from "@angular/http";

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

 data = {};

  ngOnInit() {
    this.httpService.getData()
    .subscribe(
      data => this.data = data.json()
    );
  }

}
