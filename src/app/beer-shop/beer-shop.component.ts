import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../interfaces/beer-common';
// import beers from '../../assets/data/beers.json';

@Component({
  selector: 'app-beer-shop',
  templateUrl: './beer-shop.component.html',
  styleUrls: ['./beer-shop.component.css']
})
export class BeerShopComponent implements OnInit {
  beers: any = [];

  constructor(private httpClient: HttpClient) { };

  ngOnInit(): void {
    this.httpClient.get("assets/data/beers.json").subscribe((data) => {
      this.beers = data;
      console.log(data)
    })

  };

}
