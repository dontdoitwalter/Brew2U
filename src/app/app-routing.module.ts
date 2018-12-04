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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
