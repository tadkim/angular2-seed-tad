import { Component, Input } from '@angular/core';
import { KeyupComponent } from '../basic/userinput/keyup.component';

@Component({
    selector: 'material-view',
    templateUrl:'app/material/material.component.html',
    styles: [`
    .wide-card.mdl-card {
         width: 80%; /* custom */
    }
  `],
    directives:[KeyupComponent]
})

export class MaterialComponent{
    title: string;
    modelObject: any;
    


    
}
