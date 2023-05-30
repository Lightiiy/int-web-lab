import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ProductCard } from "../models/product-card";


  enum urlSuffixes {
    HOUSE= 'HOUSE',
    AUTHORS='AUTHORS',
    GET_OLDEST_ID='?_sort=id&_order=desc&_limit=1',
  }

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  private baseUrl: string ='http://localhost:4100/'


  constructor( private http: HttpClient){}

  public getHouseOffers$(): Observable<ProductCard[]>{
    const url = this.baseUrl + urlSuffixes.HOUSE;
    return this.http.get<ProductCard[]>(url)
  }

  public postHouseOffer(newOffer: ProductCard): Observable<any> {
    const url = this.baseUrl + urlSuffixes.HOUSE;
    return this.http.post(url,newOffer);
  }

  public getHouseOldestId$():Observable<ProductCard>{
    const url = this.baseUrl + urlSuffixes.HOUSE+urlSuffixes.GET_OLDEST_ID;
    return this.http.get<ProductCard>(url)
  }

  // public getAuthors(): Observable<Seller>{
  //   const url = '${this.baseUrl}' + urlSuffixes.AUTHORS;
  //   return this.http.get<Seller>(url).pipe(map(
  //     response => {
  //       return {
  //         id: response.id,
  //         name: response.name,
  //         email: response.email
  //       } as Seller
  //     }
  //   ));
  // }

  // public postAuthor(newAuthor: Seller): Observable<any> {
  //   const url = '${this.baseUrl}' + urlSuffixes.AUTHORS;
  //   return this.http.post(url,newAuthor);
  // }
}