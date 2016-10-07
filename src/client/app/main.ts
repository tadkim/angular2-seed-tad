import { APP_BASE_HREF } from '@angular/common';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
// import { FilterableProductTableComponent } from './codelab/filterable-product-table.component';
// import { FilterableProductTableComponent } from './codelab-tad/filterable-product-table.component';
import { AppComponent } from './app.component';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }


bootstrap(AppComponent, [
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }
]);
