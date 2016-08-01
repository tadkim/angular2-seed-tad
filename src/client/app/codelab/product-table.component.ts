import { Component, Input } from '@angular/core';
import { ProductCategoryRowComponent } from './product-category-row.component';
import { CategoryModel } from './model/category.model';
import { ProductService} from './product.service';
@Component({
    selector: 'tbody.product-table',
    template: `<div class="product-category-row" [category]="data" *ngFor="let data of categories" [isStockOnly]="isStockOnly"></div>`,
    directives: [ProductCategoryRowComponent],
})
export class ProductTableComponent {
    @Input() categories: CategoryModel;
    @Input() isStockOnly: boolean;


    constructor(private myps: ProductService){}
} 