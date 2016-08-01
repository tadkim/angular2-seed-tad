import { Component, Input } from '@angular/core';
import { ProductModel } from './model/product.model';

@Component({
    selector: 'tr.product-row',  
    template: `
            <td>
                <span [style.color]="product?.stocked ? 'black': 'red'">
                {{ product?.name }}
                </span>
                
            </td>
            <td>
              {{ product?.price }}
            </td>   
    `
})
export class ProductRowComponent {
    @Input() product: ProductModel;
    

    ngOnChanges(changes: any) {
        console.log('ngOnChanges - propertyName = ' + changes['product'].currentValue);
    }
}

