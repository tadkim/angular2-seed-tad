import { Component } from '@angular/core';
import { MaterialComponent } from './material/material.component';
import { LayoutComponent } from './layout/layout.component';
@Component({
  selector: 'app-tad',
  templateUrl:'./app/app.component.html',
  directives: [MaterialComponent, LayoutComponent]
})
export class AppComponent { }
