import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
@Component({
    selector: 'layout',
    templateUrl: 'app/layout/layout.component.html',
    styles: [`
    .mdl-layout__content{ 
        height:600px;
    }
    .mdl-grid{
        height:600px;
    }
    .mdl-cell{
        height:100%;
    }
    .graybox {
        background-color:#ddd;
    }
    .vertical-max {
        height:100;
    }
    .wide-card{
        width:100%;
    }

    `
    ],
    directives:[ MapComponent]
})
export class LayoutComponent {
    state: any;


    ngOnInit() {
        console.log("LayoutComponent");

    
    } //ngOnInit end
    

    
    

}