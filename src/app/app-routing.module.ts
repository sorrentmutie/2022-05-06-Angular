import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero/components/hero-form/hero-form.component';
import { HeroReactiveComponent } from './hero/components/hero-form/hero-reactive.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { RandomUsersComponent } from './randomusers/pages/random-users/random-users.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProveComponent } from './shared/prove/prove.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';

const routes: Routes = [
  {path: 'randomusers', component: RandomUsersComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'heroForm', component: HeroFormComponent},
  {path: 'heroReactiveForm', component: HeroReactiveComponent},
  {path: 'prove', component: ProveComponent},
  {path: '', redirectTo: "heroReactiveForm", pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
