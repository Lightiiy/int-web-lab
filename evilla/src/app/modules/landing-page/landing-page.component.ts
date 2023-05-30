import { Component, OnDestroy, OnInit } from '@angular/core';
import {ProductCard } from './../../shared/models/product-card' 
import { HousesService } from 'src/app/shared/services/offers.service';
import { Observable, Subscription, from, take } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  public offers?: ProductCard[];

  private subscribtion: Subscription = new Subscription;
  
  constructor(private offersService: HousesService) { 
  }
  

  ngOnInit(): void {
    this.subscribtion = this.offersService.getOffers$().subscribe((offers: ProductCard[]) => {
      this.offers = offers.slice(0,4);
    })
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
