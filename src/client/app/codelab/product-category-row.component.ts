import { Component, Input } from '@angular/core';
import { CategoryModel } from './model/category.model';
import { ProductModel } from './model/product.model';
import { ProductRowComponent } from './product-row.component';

@Component({
    selector: 'div.product-category-row',  
    template: ` 
        <tr><th colspan="2">{{ category?.name }}</th></tr>
        <tr class="product-row"  [product]="prd" *ngFor="let prd of category?.products"></tr>
    `,
    directives:[ProductRowComponent]
})
export class ProductCategoryRowComponent {
    @Input() category: CategoryModel;
    stocked: boolean;

    @Input()
    set isStockOnly(value: any) {
        this.stocked = value;
        //manipulate..
        this.category.products.filter((product: ProductModel) => {
            if (this.stocked) {
                if (product.stocked) {
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        })
    }
    get isStockOnly() {
        return this.stocked;
    }
}

