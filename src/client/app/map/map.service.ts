import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService{
    getData() {
        return  Observable.of ([
            {
                name: 'Sports',
                products: [{
                    stocked: false,
                    name: 'football',
                    price: 323
                }]   
            },
            {
                name: 'Electronics',
                products: [{
                    stocked: false,
                    name: 'football',
                    price: 323
                }]   
            }
        ]);  
    }
}

