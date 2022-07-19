import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product";
import {map} from "rxjs/operators";
import {ProductCategory} from "../models/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = "http://localhost:8080/api/";


  constructor(private http: HttpClient) {}


  getProductListByProductCategory(categoryId: number): Observable<Product[]>{
    return this.http.get<GetResponseProduct>(this.baseUrl + 'products/search/findByCategoryId?id='+categoryId).pipe(
      map((response) => {
        return response._embedded.products;
      })
    );
  }

  getProduct(productId:number): Observable<Product>{
    return this.http.get<Product>(this.baseUrl + 'products/' +productId);
  }

  getProductCategory(): Observable<ProductCategory[]>{
    return this.http.get<GetResponseProductCategory>(this.baseUrl + 'product-category').pipe(
      map((response) => {
        return response._embedded.productCategory;
      })
    );
  }

}

interface GetResponseProduct{
  _embedded:{
    products:Product[];
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productCategory:ProductCategory[];
  }
}
