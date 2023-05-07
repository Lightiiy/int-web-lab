import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCard } from 'src/app/shared/models/product-card';
import { HousesService } from 'src/app/shared/services/offers.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public offerings: ProductCard[] = [];

  private subscribtion: Subscription = new Subscription;
  
  constructor(private offersService: HousesService) { }
  
  ngOnInit(): void {
    this.offerings = this.offersService.getOffers();
    this.subscribtion = this.offersService.offersChanged.subscribe(
      offers => {
        this.offerings = offers;
      }
    )
  }

}
