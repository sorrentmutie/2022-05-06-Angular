import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './shared/first/first.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductSpecialPipe } from './products/pipes/product-special.pipe';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductTestComponent } from './products/components/product-test/product-test.component';
import { RandomUsersComponent } from './randomusers/pages/random-users/random-users.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductsPageComponent,
    ProductsListComponent,
    ProductPipe,
    ProductSpecialPipe,
    ProductDetailsComponent,
    ProductTestComponent,
    RandomUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
