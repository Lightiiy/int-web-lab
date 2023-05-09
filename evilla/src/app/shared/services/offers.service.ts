import { ProductCard } from "../models/product-card";
import { HOUSING_OFFERS } from "src/DANE";
import { SELLERS } from "src/DANE_SPRZEDAWCE";
import { Subject } from "rxjs";
import { Seller } from "../models/seller";

export class HousesService{

  public offersChanged = new Subject<ProductCard[]>;

  public offers = HOUSING_OFFERS;

  private sellers = SELLERS;

  public oldestId = this.setOldestId();

  getOffers(){
    return this.offers;
  }

  addOffer(newOffer: ProductCard){
    this.offers.push(newOffer);
    this.offersChanged.next(this.offers.slice());
  }

  setOldestId():number {
   return Math.max(...this.offers.map( obj => obj.id));
  }

  getOldestId(): number{
    this.oldestId++;
    return this.oldestId;
  }

  getSeller(id: number): Seller{
    return this.sellers[this.offers[id].idSeller];
  }
}
