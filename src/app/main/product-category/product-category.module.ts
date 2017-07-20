import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { Routes, RouterModule } from '@angular/router';

export const productCateRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ProductCategoryComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productCateRoutes)
  ],
  declarations: [ProductCategoryComponent]
})
export class ProductCategoryModule { }
