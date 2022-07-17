import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {CartService} from "../../services/cart.service";

export interface ProductSize{
  size: string;
  price:number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  product!: Product;
  productSizes: ProductSize[] = [];
  productPrice!: number;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private activatedRoute: ActivatedRoute) {
    const productId = this.activatedRoute.snapshot.params.id;
    this.productService.getProduct(productId).subscribe((data) => {
      console.log(data);
      this.product = data;
      if(data.sizes){
        this.getProductSizes(data.sizes);
      }
      else{
        this.productPrice = data.unitPrice;
      }

    });
  }

  getProductSizes(productSizes: string){
    const sizes = productSizes.split('/');
    for(let i = 0; i<sizes.length; i+=2){
      this.productSizes.push({
        size: sizes[i],
        price: +sizes[i+1]
      })
    }
    this.productPrice = this.productSizes[0].price;
  }

  selectPrice(productSize: ProductSize){
    console.log(productSize.price === this.productPrice)
    this.productPrice = productSize.price;

    console.log(this.productPrice)
  }

  addProductToCart(product: Product){
    this.cartService.addProduct(product);
  }
}
