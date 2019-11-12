import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  title = 'Category List';
  categories: Category[] = [
    {
      id: 1,
      categoryName: 'Paint Type 1'
    },
    {
      id: 2,
      categoryName: 'Paint Type 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
