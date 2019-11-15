import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProductAddReactiveComponent } from './product/product-add-reactive/product-add-reactive.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'product-add-1', component: ProductAddClassicComponent },
  { path: 'product-add-2', component: ProductAddReactiveComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products/category/:categoryId', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
