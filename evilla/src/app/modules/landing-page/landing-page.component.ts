import { Component, OnInit } from '@angular/core';
import {ProductCard } from './../../shared/models/product-card' 
import { HOUSING_OFFERS } from 'src/DANE';
import { HousesService } from 'src/app/shared/services/offers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public house: ProductCard[] = [];

  private subscribtion: Subscription = new Subscription;
  
  constructor(private offersService: HousesService) { }
  
  ngOnInit(): void {
    this.house = this.offersService.getOffers();
    this.subscribtion = this.offersService.offersChanged.subscribe(
      offers => {
        this.house = offers;
      }
    )
  }

}
