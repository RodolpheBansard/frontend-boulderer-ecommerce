import {ProductCategory} from "./product-category";

export  interface Product{
  id:number;
  category:ProductCategory;
  sku:string;
  name:string;
  description:string;
  unitPrice:number;
  sizes:string;
  imageUrl:string;
  active:boolean;
  unitsInStock:number;
  dateCreated:Date;
  lastUpdate:Date;
}
