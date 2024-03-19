import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightCategoryDirective } from './highlight-category.directive';



@NgModule({
  declarations: [
    ProductListComponent,
    HighlightCategoryDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ListModule { }


