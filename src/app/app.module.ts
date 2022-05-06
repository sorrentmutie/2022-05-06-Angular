import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './shared/first/first.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductSpecialPipe } from './products/pipes/product-special.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductsPageComponent,
    ProductsListComponent,
    ProductPipe,
    ProductSpecialPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
