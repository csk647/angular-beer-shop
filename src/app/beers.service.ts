import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Beer } from './interfaces/beer-common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeersService implements OnInit {
  //   private beerList: Array<Beer> = [];
  private beers$ = new BehaviorSubject([]);
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/data/beers.json').subscribe((data) => {
      this.beerList = data;
      console.log(data);
    });
  }

  set beerList(arg: any) {
    this.beers$ = arg;
  }

  get beerList() {
    return this.beers$;
  }
}
