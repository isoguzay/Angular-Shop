import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-reactive',
  templateUrl: './product-add-reactive.component.html',
  styleUrls: ['./product-add-reactive.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddReactiveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService,
              private productService: ProductService, private alertifyService: AlertifyService) { }

  addProductForm: FormGroup;
  model: Product = new Product();
  categories: Category[];

  createAddProductForm() {
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      imageUrl: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createAddProductForm();
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    });
  }

  add() {
    if (this.addProductForm.valid) {
      this.model = Object.assign({}, this.addProductForm.value);
    }

    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(data.productName + ' added successfully.');
    });

  }

}
