import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './modules/add-offer/add-offer.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { SearchPageComponent } from './modules/search-page/search-page.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
{
  path: 'search',
  component: SearchPageComponent
},
{
  path: 'add',
  component: AddOfferComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
