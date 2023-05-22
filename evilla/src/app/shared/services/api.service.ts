import { Injectable } from "@angular/core";
import {  Observable } from "rxjs";
import { ProductCard } from "../models/product-card";
import { HttpClient } from '@angular/common/http';
import { API_URL } from "../models/api.url";
import { Seller } from "../models/seller";

@Injectable()
export class ApiService{

  constructor (private httpClient: HttpClient) {}

  public getHouseOfferingsFromApi$(): Observable<ProductCard> {
    return this.httpClient.get<ProductCard>(API_URL.HOUSE).pipe()
  }

    public getAuthorsFromApi$(): Observable<Seller> {
    return this.httpClient.get<Seller>(API_URL.AUTHOR).pipe()
  }

  public postNewHouseOffering(newOffer: ProductCard){
      this.httpClient.post(API_URL.HOUSE, newOffer)
  }

}