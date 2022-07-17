import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {Observable} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];

  categoryId = 2;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(() => {
      const hasCategoryId = this.activatedRoute.snapshot.paramMap.has('categoryId');
      if(hasCategoryId){
        // @ts-ignore
        this.categoryId = +this.activatedRoute.snapshot.paramMap.get('categoryId');
      }

      this.productService.getProductListByProductCategory(this.categoryId).subscribe((products) => {
        this.products = products;
      })
    });



  }

  ngOnInit(): void {
  }

}
