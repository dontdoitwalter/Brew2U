import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from '../app/admin/main/main.component';
import { OrderAdminComponent } from '../app/admin/order-admin/order-admin.component';
import { UserAdminComponent } from '../app/admin/user-admin/user-admin.component';
import { AdminComponent } from '../app/admin/admin/admin.component';
import { StoresComponent } from '../app/admin/stores/stores.component';
import { AddStoreComponent } from './admin/add-store/add-store.component';
import { UpdateStoreComponent } from './admin/update-store/update-store.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent  },
  { path: 'customize', component: CustomizeComponent  },
  { path: 'checkout', component: CheckoutComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'landing', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin/main', component: MainComponent },
  { path: 'admin/orderadmin', component: OrderAdminComponent },
  { path: 'admin/useradmin', component: UserAdminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/storesadmin', component: StoresComponent },
  { path: 'admin/addstoresadmin', component: AddStoreComponent },
  { path: 'admin/updatestoreadmin', component: UpdateStoreComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
