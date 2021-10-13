import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerShopComponent } from './beer-shop.component';

describe('BeerShopComponent', () => {
  let component: BeerShopComponent;
  let fixture: ComponentFixture<BeerShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
