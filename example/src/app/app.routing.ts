import { Routes, RouterModule } from '@angular/router';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';

import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { LoginComponent } from './login/login.component';
import { Demo3Component } from './demo3/demo3.component';


const arr: Routes = [
  {path: '', component: ProductdisplayComponent},
  {path: 'addproduct', component: ProductaddComponent},
  {path: 'editproduct/:pro_id', component: EditproductComponent},

  {path: 'signup2', component: SignupReactiveDemoComponent},
  {path: 'users', component: UserdisplayComponent},

  {path: 'signup', component: SignupComponent},
  {path: 'edituser/:user_email', component: EdituserComponent},
  {path: 'edituserreactive/:user_email', component: EdituserreactiveComponent},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: 'demo1/id', component: Demo1Component},
  {path: 'demo2', component: Demo2Component},
  {path: 'demo3', component: Demo3Component},
  {path: 'login', component: LoginComponent},
  {path: 'customer',loadChildren:'./customer/customer.module#CustomerModule'},
  {path: '**', redirectTo: '/pagenotfound'}
];

export const routing = RouterModule.forRoot(arr);
