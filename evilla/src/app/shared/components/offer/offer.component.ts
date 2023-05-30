import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../../models/product-card';
import { Seller } from '../../models/seller';
import { HousesService } from '../../services/offers.service';
import { Mail } from '../../models/mail';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  constructor(public offersService: HousesService, private route: ActivatedRoute) { }

  public id!: number;

  public offer!: ProductCard;

  public emailFeedback!: FormGroup;

  public seller!: Seller;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.id = this.isNotNull(params.get('id'));
    });
    this.offer = this.offersService.offers[this.id];
    this.seller = this.offersService.getSeller(this.id);
    this.innitForm();
  }

  innitForm(){
    let emailAddress = '';
    let emailContent = '';

      this.emailFeedback = new FormGroup({
        'emailAddress': new FormControl(emailAddress, Validators.required),
        'emailContent': new FormControl(emailContent, Validators.required),
      })
  }

  isNotNull(value: string | null):number {
    if (value === null) return 0;
    else return +value;
  }
  
  onSubmit(){
    console.log(this.emailFeedback.value);
    if( this.emailFeedback.value.emailAddress !== 'null' && this.emailFeedback.value.emailContent !== 'null'){
    let feedback = new Mail(this.emailFeedback.value.emailAddress, this.emailFeedback.value.emailContent );
    }
    else return;

    if ((Math.random() * 100) > 49)
    {
      alert('Feedback Sent!');
      this.emailFeedback.reset();
    }
    else {
      alert('Something went wrong :c');
    }
  }

}
