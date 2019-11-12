import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'Product List';

  products: Product[] = [
  {
    id: 1,
    productName: 'AlpinaSilan',
    unitPrice: 35.00,
    categoryId: 1,
    imageUrl: 'https://filliustam.com/cms/phpThumb.php?src=../uploads/alpina_silan.jpg&w=640'
  },
  {
    id: 1,
    productName: 'AlpinaLife',
    unitPrice: 45.00,
    categoryId: 2,
    imageUrl: 'https://filliustam.com/cms/phpThumb.php?src=../uploads/alpina-life.jpg&w=640'
  }];

  constructor() { }

  ngOnInit() {
  }

}
