import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component : ProductListComponent},
    { path: 'contactus', component : ContactUsComponent},
    { path: 'aboutus', component : AboutUsComponent},
    { path: 'productadd', component : ProductAddComponent},
    { path: 'productlist', component : ProductListComponent},
    { path: 'payment', component : PaymentComponent},
    { path: 'welcome', component : WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
