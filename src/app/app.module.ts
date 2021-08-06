import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TablePersonasComponent } from './index/table-personas/table-personas.component';
import { ServiceTableService } from './index/table-personas/service/service-table.service';
import { LoginService } from './login/service/login.service';

import { LoginComponent } from './login/login.component';
import { AppInterceptorInterceptor } from './interceptor/app-interceptor.interceptor';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TablePersonasComponent,
    LoginComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ServiceTableService, LoginService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
