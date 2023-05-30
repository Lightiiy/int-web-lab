import { ProductCard } from "../models/product-card";
import { SELLERS } from "src/DANE_SPRZEDAWCE";
import { BehaviorSubject, Subject, map } from "rxjs";
import { Seller } from "../models/seller";
import {  ApiUrlService } from "./apiUrl.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HousesService{

  public offers$: BehaviorSubject<ProductCard[]> = new BehaviorSubject<ProductCard[]>([]);

  private sellers = SELLERS;

  public oldestId!: number;

  constructor( private apiUrl: ApiUrlService){
    this.fetchHouseOffers();
    this.fetchHouseOldestId();
  }

  private fetchHouseOffers(): void { 
    this.apiUrl.getHouseOffers$().subscribe(
      (offers: ProductCard[]) => {
        this.offers$.next(offers);
      },
      (error: any) => {
        console.error('Error fetching house offers', error);
      }
    )
  }

  fetchHouseOldestId(): void {
   this.apiUrl.getHouseOldestId$().subscribe((response: any) => {
    if (response.length > 1)
    {
      console.error ('wrong api request')
    }
    this.oldestId = response[0].id;
    console.log('recieved oldest id',  this.oldestId);
   },
   (error: any)=>
   {
    console.error('Couldnt fetch oldest id', error);
   })
  }


  getOffers$(){
    return this.offers$.asObservable();
  }

  getOldestId(){
    this.fetchHouseOldestId();
    return this.oldestId +1;
  }

  addOffer(newOffer: ProductCard){
    const currentOffers = this.offers$.getValue() || null;
    const updateOffers = [...currentOffers, newOffer];
    this.offers$.next(updateOffers);

    this.apiUrl.postHouseOffer(newOffer).subscribe(
      (response: any) => {
        console.log ( 'Offer posted succesfully', response);
      },
      (error: any) => {
        console.error('Error posting a new offer', error);
      }
      )
  }


  // getOldestId(): number{
  //   this.oldestId++;
  //   return this.oldestId;
  // }

  // getSeller(id: number): Seller{
  //   return this.sellers[this.offers[id].idSeller];
  // }
}
