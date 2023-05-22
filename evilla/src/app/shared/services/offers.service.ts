import { ProductCard } from "../models/product-card";
import { find, Observable, Subject, take } from "rxjs";
import { Seller } from "../models/seller";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HousesService{

  constructor( private api: ApiService){
  }
    
  public offersChanged = new Subject<ProductCard[]>;
    
  public offers: Observable<ProductCard> = this.api.getHouseOfferingsFromApi$().pipe();
    
  private sellers: Observable<Seller> =  this.api.getAuthorsFromApi$().pipe();

  public oldestId = 0;

  getOffers(){
    console.log(this.offers);
    return this.offers;
  }

  addOffer(newOffer: ProductCard){
    this.api.postNewHouseOffering(newOffer);
  }


  getOldestId(): number{
    this.oldestId++;
    return this.oldestId;
  }

  getSeller(id: number): Seller | undefined{
    this.sellers.pipe(find( offer => offer.id === id), take(1)).subscribe(
      author => {
        if (author !== undefined)
        {
          return author;
        }
        else{
          return undefined;
        }
      }
    )
    return undefined;
  }
  

  getOfferByIndex(id: number): ProductCard | undefined{
    this.offers.pipe(find( offer => offer.id === id), take(1)).subscribe(
      offer => {
        if (offer !== undefined)
        {
          return offer;
        }
        else{
          return undefined;
        }
      }
    )
    return undefined;
  }
}
