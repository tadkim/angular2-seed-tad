import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService{
    getData() {
        return  Observable.of([
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



@Injectable()
export class MyProductService{
    cnt: number = 0;
    constructor() {
        this.cnt++;
        console.log(this.cnt);
    }
    getData() {
        return  Observable.of([
            {
                name: 'My Sports',
                products: [
                    {
                    stocked: false,
                    name: 'football2',
                    price: 323
                    },
                    {
                    stocked: false,
                    name: 'football2',
                    price: 323
                    }
                ]   
            },
            {
                name: 'My Electronics',
                products: [
                    {
                    stocked: false,
                    name: 'football2',
                    price: 323
                    },
                    {
                    stocked: false,
                    name: 'football2',
                    price: 323
                    }
                ]   
            }
        ]);  
    }
}