import { Component } from '@angular/core';
import { ProductTableComponent } from './product-table.component';
import { CategoryModel } from './model/category.model';
import { SearchBarComponent } from './search-bar.component';
import { ProductService, MyProductService } from './product.service';

@Component({
    selector: 'filterable-product-table',
    template: `
    <search-bar (stocked)="onChangeStocked($event)"></search-bar>
    <table>
        <thead><tr><th>Name</th><th>price</th></tr></thead>
        <tbody class="product-table" [categories]="sample" [isStockOnly]="isStockOnly"></tbody>
    </table>
    `,
    directives: [ProductTableComponent, SearchBarComponent],
    providers: [{provide: ProductService, useFactory: () => new MyProductService()}]

})
export class FilterableProductTableComponent {
    sample: CategoryModel[];
    isStockOnly: boolean;

    onChangeStocked(e: boolean) {
        console.log('checked...', e);
        this.isStockOnly = e;
    }

    constructor(private productService: ProductService) {
        console.log("filterable create...");
    }
    ngOnInit() {
        console.log(this);
        // this.sample = this.productService.getData(); 
    }
} 