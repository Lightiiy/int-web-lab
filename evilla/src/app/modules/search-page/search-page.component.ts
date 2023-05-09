import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCard } from 'src/app/shared/models/product-card';
import { HousesService } from 'src/app/shared/services/offers.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  public offerings: ProductCard[] = [];

  private subscribtion: Subscription = new Subscription;

  offerSearch!: FormGroup;
  
  constructor(private offersService: HousesService, public searchService: SearchService) { }
  
  ngOnInit(): void {
    this.offerings = this.offersService.getOffers();
    this.subscribtion = this.offersService.offersChanged.subscribe(
      offers => {
        this.offerings = offers;
      }
    )
    this.initForm();
  }

  private initForm(){

    let offerAddress = '';
    let offerCity = '';
    let offerBedroom = null;
    let offerDescription = '';

    this.offerSearch=new FormGroup({
      "addressSearch": new FormControl(offerAddress, ),
      "citySearch": new FormControl(offerCity, ),
      "bedroomSearch": new FormControl(offerBedroom, ),
      "descriptionSearch": new FormControl(offerDescription,),
      "sortSearch": new FormControl(this.searchService.currentSorting),

    })
  }
  

  // if (this.offerSearch.value.citySearch !== '' )
  //     {
  //       console.log('dupa2');
  //     }
  //      if (this.offerSearch.value.bedroomSearch !== null )
  //     {
  //       console.log('dupa3');
  //     }
  //      if (this.offerSearch.value.descriptionSearch !== '' )
  //     {
  //       console.log('dupa4');
  //     }


  onSubmit(){
    let filtered: ProductCard[] = [...this.offersService.getOffers()];
    if (this.offerSearch.value.addressSearch !== '' )
    {
        filtered = filtered.filter(offer => {
        let query = this.offerSearch.value.addressSearch.toLowerCase();
        return offer.address.toLowerCase().includes(query);
      })
    }
     if (this.offerSearch.value.citySearch !== '' )
     {
        filtered = filtered.filter(offer => {
        let query = this.offerSearch.value.citySearch.toLowerCase();
        return offer.city.toLowerCase().includes(query);
      })
     }
     if (this.offerSearch.value.bedroomSearch !== -1 )
     {
        filtered = filtered.filter(offer => {
        return offer.bedrooms >= this.offerSearch.value.bedroomSearch;
      })
     }
      if (this.offerSearch.value.descriptionSearch !== '' )
     {
        filtered = filtered.filter(offer => {
        let query = this.offerSearch.value.descriptionSearch.toLowerCase();
        return offer.description.toLowerCase().includes(query);
      })
     }
      this.offerings = filtered;
  }

  onChange(sort: string){
    let sortedOfferings: ProductCard[] = [];

    if( sort === this.searchService.sortingMethods[0])
    {
    sortedOfferings = this.offerings.sort( (a, b) => a.price - b.price);
    this.offerings = sortedOfferings;
    this.searchService.setCurrentSorting( this.searchService.sortingMethods[0]);
    return;
    }
    if( sort === this.searchService.sortingMethods[1])
    {
    sortedOfferings = this.offerings.sort( (a, b) => b.price - a.price);
    this.offerings = sortedOfferings;
    this.searchService.setCurrentSorting( this.searchService.sortingMethods[1]);
    return;
    }
    
  }

  onClear(){
    this.offerings = [...this.offersService.getOffers()];
    this.offerSearch.reset();
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
