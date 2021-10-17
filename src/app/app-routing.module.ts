import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeerShopComponent } from './beer-shop/beer-shop.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'beer', component: BeerShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
