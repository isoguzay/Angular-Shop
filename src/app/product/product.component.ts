import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

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
      productName: 'AlpinaSilan Green',
      unitPrice: 35.00,
      categoryId: 1,
      imageUrl: 'https://filliustam.com/cms/phpThumb.php?src=../uploads/alpina_silan.jpg&w=640'
    },
    {
      id: 2,
      productName: 'AlpinaLife White',
      unitPrice: 45.00,
      categoryId: 2,
      imageUrl: 'https://filliustam.com/cms/phpThumb.php?src=../uploads/alpina-life.jpg&w=640'
    },
    {
      id: 3,
      productName: 'AlpinaLife Yellow',
      unitPrice: 25.00,
      categoryId: 2,
      imageUrl: 'https://filliustam.com/cms/phpThumb.php?src=../uploads/alpina-life.jpg&w=640'
    },
    {
      id: 4,
      productName: 'AlpinaLife Blue',
      unitPrice: 15.00,
      categoryId: 4,
      imageUrl: 'https://filliustam.com/cms/phpThumb.php?src=../uploads/alpina-life.jpg&w=640'
    }];

  constructor(private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.alertifyService.warning('Added : ' + product.productName);
  }

}
