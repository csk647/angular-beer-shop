import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { Beer } from './interfaces/beer-common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private carts$ = new Subject();
  constructor(private httpClient: HttpClient) {}

  set addCartList(arg: any) {
    // this.carts$ = this.carts$.next(arg);
    this.carts$ = arg;
    console.log(this.carts$);
  }

  get cartList() {
    return this.carts$;
  }
}
