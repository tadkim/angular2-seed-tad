import { Component, Input } from '@angular/core';
import { AccidentModel } from './model/accident.model';

@Component({
    selector: 'tr.product-row',  
    template: `
            <td>
                <span [style.color]="accident?.weather ? 'black': 'red'">
                {{ accident?.name }}
                </span>
                
            </td>
            <td>
              {{ accudent?.death }}
            </td>   
    `
})
export class MapRowComponent {
    @Input() accidents: AccidentModel;
    

    ngOnChanges(changes: any) {
        console.log('ngOnChanges - propertyName = ' + changes['accident'].currentValue);
    }
}

