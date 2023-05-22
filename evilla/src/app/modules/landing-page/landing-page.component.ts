import { Component, OnInit } from '@angular/core';
import {ProductCard } from './../../shared/models/product-card' 
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
    this.subscribtion = this.offersService.getOffers().subscribe(
      offer => {this.house.push(offer)}
    )
  }

}
