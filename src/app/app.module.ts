import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProveComponent } from './shared/prove/prove.component';
import { HeroFormComponent } from './hero/components/hero-form/hero-form.component';
import { HeroReactiveComponent} from './hero/components/hero-form/hero-reactive.component';
import { FirstInterceptor } from './shared/interceptors/first.interceptor';
import { SecondInterceptor } from './shared/interceptors/second.interceptor';
import { ProvaSubjectComponent } from './shared/prove/prova-subject/prova-subject.component';
import { ProvaObservableServiceComponent } from './shared/prove/prova-observable-service/prova-observable-service.component';
import { ProvaEventBusComponent } from './shared/prove/prova-event-bus/prova-event-bus.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
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
    RandomUsersComponent,
    NotFoundComponent,
    WelcomeComponent,
    MenuComponent,
    ProveComponent,
    HeroFormComponent,
    HeroReactiveComponent,
    ProvaSubjectComponent,
    ProvaObservableServiceComponent,
    ProvaEventBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
