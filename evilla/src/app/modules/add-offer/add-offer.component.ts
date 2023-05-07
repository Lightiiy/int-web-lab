import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HousesService } from 'src/app/shared/services/offers.service';
import { ProductCard } from 'src/app/shared/models/product-card';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {

  offerAdd!: FormGroup;

  newOffer!: ProductCard;

  constructor(private offerService: HousesService) { }

  ngOnInit(): void {
    this.newOffer = new ProductCard( '',
    '',
    0,
    'https://picsum.photos/seed/'+Math.round(Math.random()*10000)+'/1920/1080',
    '',
    0);

    this.initForm();
  }


  private initForm(){


    let addressOffer = '';
    let cityOffer = '';
    let bedroomsOffer = 0;
    let descriptionOffer = '';
    let priceOffer = 0;
    let imageOffer = this.newOffer.image;


    this.offerAdd=new FormGroup({
      "addressOffer": new FormControl(addressOffer, Validators.required),
      "cityOffer": new FormControl(cityOffer, Validators.required),
      "bedroomsOffer": new FormControl(bedroomsOffer, Validators.required),
      "descriptionOffer": new FormControl(descriptionOffer, Validators.required),
      "priceOffer": new FormControl(priceOffer, Validators.required),
      "imageOffer": new FormControl(imageOffer, Validators.required)

    })
  }

  onSubmit(){
    this.newOffer.address = this.offerAdd.value["addressOffer"];
    this.newOffer.city = this.offerAdd.value["cityOffer"];
    this.newOffer.bedrooms = this.offerAdd.value["bedroomsOffer"];
    this.newOffer.description = this.offerAdd.value["descriptionOffer"];
    this.newOffer.price = this.offerAdd.value["priceOffer"];
    this.offerService.addOffer(this.newOffer);

  }
}
