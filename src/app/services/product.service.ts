import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = "http://localhost:8080/api/products";

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map((response) => {
        console.log(response)
        return response._embedded.products;
      })
    );
  }
}

interface GetResponse{
  _embedded:{
    products:Product[];
  }
}
