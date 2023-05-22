import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCard } from 'src/app/shared/models/product-card';
import { HousesService } from 'src/app/shared/services/offers.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';
import { Validator } from '@angular/forms';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  public offerings: ProductCard[] = [];
  
  public offeringsUnfiltered: ProductCard[] = [];

  private subscribtion: Subscription = new Subscription;

  offerSearch!: FormGroup;
  
  constructor(private offersService: HousesService,
    public searchService: SearchService,
    private changeDetector: ChangeDetectorRef,) { }
  
  ngOnInit(): void {
    this.subscribtion = this.offersService.offers.subscribe(
      offers => {
        this.offerings.push(offers);
        this.offeringsUnfiltered.push(offers);
      }
    )
    this.initForm();
  }

  private initForm(){

    this.offerSearch=new FormGroup({
      "addressSearch": new FormControl( ),
      "citySearch": new FormControl(),
      "bedroomSearch": new FormControl(Validators.pattern('^[1-9][0-9]*$')),
      "descriptionSearch": new FormControl(),
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
    let filtered: ProductCard[] =[...this.offeringsUnfiltered];
    if (this.offerSearch.value.addressSearch !== null )
    {
        filtered = filtered.filter(offer => {
        let query = this.offerSearch.value.addressSearch.toLowerCase();
        return offer.address.toLowerCase().includes(query);
      })
    }
     if (this.offerSearch.value.citySearch !== null )
     {
        filtered = filtered.filter(offer => {
        let query = this.offerSearch.value.citySearch.toLowerCase();
        return offer.city.toLowerCase().includes(query);
      })
     }
     if (this.offerSearch.value.bedroomSearch !== null )
     {
        filtered = filtered.filter(offer => {
        return offer.bedrooms >= this.offerSearch.value.bedroomSearch;
      })
     }
      if (this.offerSearch.value.descriptionSearch !== null )
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
    this.offerings = [...this.offeringsUnfiltered];
    this.offerSearch.reset();
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
