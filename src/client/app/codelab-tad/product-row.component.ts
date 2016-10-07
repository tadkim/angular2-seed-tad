import { Component, Input } from '@angular/core';
import { ProductModel } from './model/product.model';
@Component({
    selector: 'tr.product-row',
    template: `
        <tr><span [style.color]="product?.stocked ? 'black' : 'red' ">{{product?.name}}{{ product?.name }} </span>
        </tr>
        <tr>{{ product?.price }}</tr>
    `
})
export class ProductRowComponent {
    @Input() product: ProductModel;

    ngOnChange(changes: any) {
        console.log('ngOnChange - property Name = ' + changes['product'].currentValue);
    }
}