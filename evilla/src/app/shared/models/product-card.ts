export class ProductCard {

  constructor(  
    public id: number,
    public idSeller: number,
    public address: string,
    public city: string,
    public bedrooms: number,
    public image: string ,
    public description: string,
    public price: number)  {}
  

}