import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  title = 'Product List';
  products: Product[];

  constructor(private alertifyService: AlertifyService, private productService: ProductService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params['categoryId']).subscribe(response => {
        this.products = response;
      });
    });
  }

  addToCart(product: Product) {
    this.alertifyService.warning('Added : ' + product.productName);
  }

}
