import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DepartmentdisplayComponent } from './departmentdisplay/departmentdisplay.component';
import { AdddeptComponent } from './departmentdisplay/adddept/adddept.component';
import { routing } from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { EditdeptComponent } from './departmentdisplay/editdept/editdept.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentdisplayComponent,
    AdddeptComponent,
    EditdeptComponent,
  ],
  imports: [
    BrowserModule, FormsModule, routing, NgbModule, NgbPaginationModule, NgbAlertModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

