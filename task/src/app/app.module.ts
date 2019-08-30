import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { Interceptordemo } from './interceptordemo';

import { routing } from './app.routing';


import { UserModule } from './userdisplay/user.module';
import { HomeComponent } from './home/home.component';
import { MiscModule } from './misc.module';
import { Product1Module } from './product1/product1.module';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { AppCustomerPreloader } from './app.customerpreloader';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { AddTask1Component } from './taskdisplay1/addtask1/addtask1.component';
import { Edittask1Component } from './taskdisplay1/edittask1/edittask1.component';
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    LoginComponent,
    HomeComponent,
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent,
    Sidebar2Component,
    Taskdisplay1Component,
    AddTask1Component,
    Edittask1Component,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    MiscModule,
    Product1Module,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptordemo, multi: true},
    AppCustomerPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
