import { Injectable } from '@angular/core';
import {Http, Response } from "@angular/http";
import 'rxjs/Rx';

const apiUrl = 'https://swapi.co/api/';

@Injectable()
export class SWService {

  constructor(private http: Http) {}
  
  getCategories(){
    return this.http.get(apiUrl).map((response: Response) => response.json())
  }
}
