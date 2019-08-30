import { Routes, RouterModule} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserGuardService } from './userguard.service';
import { AppCustomerPreloader } from './app.customerpreloader';
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { Edittask1Component } from './taskdisplay1/edittask1/edittask1.component';
import { AddTask1Component } from './taskdisplay1/addtask1/addtask1.component';
import { TaskResolved } from './taskdisplay/task';
import { TaskComponent } from './task/task.component';

const arr: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addtask', component: AddtaskComponent},
   {path: 'task', component: TaskdisplayComponent},
  {path: 'edittask/:Id', component: EdittaskComponent},
  {path: 'customer', data: {preload: true}, loadChildren: './customer/customer.module#CustomerModule'},
  {path: 'user1', loadChildren: './users/users.module#UsersModule'},
  {path: 'product', canLoad: [UserGuardService], loadChildren: './productdisplay/product.module#ProductModule'},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: 'taskdisplay1', component: Taskdisplay1Component},
  {path: 'edittask1/:Id', component: Edittask1Component},
  {path: 'addtask1', component: AddTask1Component},
  {path: 'task', resolve: {tData: TaskResolved}, component: TaskComponent},

  {path: '**', redirectTo: '/pagenotfound'}
];

export const routing = RouterModule.forRoot(arr, {preloadingStrategy: AppCustomerPreloader});
