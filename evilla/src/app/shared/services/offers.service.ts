import { ProductCard } from "../models/product-card";
import { HOUSING_OFFERS } from "src/DANE";
import { Subject } from "rxjs";

export class HousesService{

  public offersChanged = new Subject<ProductCard[]>;

  public offers = HOUSING_OFFERS;

  getOffers(){
    return this.offers;
  }

  addOffer(newOffer: ProductCard){
    this.offers.push(newOffer);
    this.offersChanged.next(this.offers.slice());

  }
}