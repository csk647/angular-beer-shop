import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer, Tag } from '../interfaces/beer-common';
import { BeersService } from '../beers.service';
import { CartService } from '../cart.service';
// import beers from '../../assets/data/beers.json';

@Component({
  selector: 'app-beer-shop',
  templateUrl: './beer-shop.component.html',
  styleUrls: ['./beer-shop.component.css'],
})
export class BeerShopComponent implements OnInit {
  beers: any = [];
  filterList: any = [];
  selectedFilter: Array<Tag> = [];
  oneSelectedFilterBox: any;

  constructor(
    private httpClient: HttpClient,
    private beersService: BeersService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.httpClient.get('assets/data/beers.json').subscribe((data) => {
      // this.beers = data;
      this.beersService.beerList = data;
      this.beers = data || {};
      console.log(data);
    });

    this.httpClient.get('assets/data/tags.json').subscribe((data) => {
      this.filterList = data;
    });

    this.getBeers();
  }

  getBeers() {
    this.beers = this.beersService.beerList || {};
    console.log('hi');
  }
  sendToMyCart(arg: any) {
    console.log(arg);
    this.cartService.addCartList = [this.cartService.cartList, arg];
  }
  addFilter(filter: Tag) {
    console.log(this.selectedFilter, filter);
    this.selectedFilter.push(filter);
    // 마지막 선택된 filter 를 oneSelectedFilterBox에 넣기
    this.oneSelectedFilterBox = filter;
    // checkFilterExist 는 포함되는게 있으면 array로 만들어짐
    let checkFilterExist = this.selectedFilter.filter(
      (el) => el.name === filter.name
    );
    // length가 0 보다 크면
    if (checkFilterExist.length > 0) {
      checkFilterExist = checkFilterExist.filter(
        (el) => el.name !== filter.name
      );
      this.selectedFilter = checkFilterExist;
    } else {
      checkFilterExist.push(filter);
    }
    this.selectedFilter.push(filter);
    console.log(this.selectedFilter);
    const findIndex = this.filterList.findIndex((el: any) => el === filter);
    this.oneSelectedFilterBox = this.oneSelectedFilterBox.push(findIndex);

    console.log(findIndex);
  }
}
