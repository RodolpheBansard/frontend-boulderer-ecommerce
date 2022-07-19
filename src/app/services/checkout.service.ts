import { Injectable } from '@angular/core';
import {CartItem, CartService} from "./cart.service";
import {Purchase} from "../models/purchase";
import {Address} from "../models/address";
import {Customer} from "../models/customer";
import {Order} from "../models/order";
import {OrderItem} from "../models/order-item";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  cart: CartItem[] = []
  cartPrice: number = 0;

  constructor(private cartService: CartService,
              private http: HttpClient) {
    this.cartService.cart$.subscribe((cartItems)=>{
      this.cart = cartItems;
    })
    cartService.cartPrice$.subscribe((cartPrice)=> {
      this.cartPrice = cartPrice;
    })
  }

  checkout(purchase: Purchase){

    this.http.post('http://localhost:8080/api/checkout/purchase',purchase).subscribe((data) => {
      console.log(data);
    })

  }
}
