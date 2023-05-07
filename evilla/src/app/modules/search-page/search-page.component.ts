import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCard } from 'src/app/shared/models/product-card';
import { HousesService } from 'src/app/shared/services/offers.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public offerings: ProductCard[] = [];

  private subscribtion: Subscription = new Subscription;

  offerSearch!: FormGroup;
  
  constructor(private offersService: HousesService) { }
  
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
    let offerBedroom = '';
    let offerDescription = '';

    this.offerSearch=new FormGroup({
      "addressSearch": new FormControl(offerAddress, Validators.required),
      "citySearch": new FormControl(offerAddress, Validators.required),
      "bedroomSearch": new FormControl(offerAddress, Validators.required),
      "descriptionSearch": new FormControl(offerAddress, Validators.required),
    })
  }

  onSubmit(){
    console.log(this.offerSearch);
  }

}
