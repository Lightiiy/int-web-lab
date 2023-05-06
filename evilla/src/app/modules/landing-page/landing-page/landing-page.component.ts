import { Component, OnInit } from '@angular/core';
import {ProductCard } from './../../../shared/models/product-card' 
import { HOUSING_OFFERS } from 'src/DANE';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  house: ProductCard[] = HOUSING_OFFERS;

  constructor() { }

  ngOnInit(): void {
  }

}
