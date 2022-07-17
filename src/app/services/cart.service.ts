import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../models/product";

export interface CartItem{
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cart$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  addProduct(product:Product){
    if(this.cartHasProduct(product)){
      this.incrementQuantity(product);
    }
    else{
      const newCart = this.cart$.getValue();
      newCart.push({
        product:product,
        quantity:1
      })
      this.cart$.next(newCart)
    }
    this.updatePriceAndNumber();
  }

  cartHasProduct(product: Product): boolean{
    let hasProduct = false;
    this.cart$.getValue().forEach((cartItem) => {
      if(product === cartItem.product){
        hasProduct = true;
      }
    })
    return hasProduct;
  }

  incrementQuantity(product: Product){
    console.log("increment");
    this.cart$.getValue().forEach((cartItem) => {
      if(product === cartItem.product){
        cartItem.quantity++;
      }
    })
  }

  updatePriceAndNumber(){
    let productNumber = 0;
    let cartPrice = 0;
    this.cart$.getValue().forEach((cartItem) => {
      productNumber += 1;
      cartPrice += cartItem.product.unitPrice * cartItem.quantity;
    })

    this.cartPrice$.next(cartPrice);
    this.productNumber$.next(productNumber);
  }

  deleteItemFromCart(index: number){
    const newCart = this.cart$.getValue();
    newCart.splice(index,1)
    this.cart$.next(newCart)
    this.updatePriceAndNumber();
  }

}
