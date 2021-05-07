import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideCentrosComponent } from './index/aside-centros/aside-centros.component';
import { IndexComponent } from './index/index.component';
import { TablePersonasComponent } from './index/table-personas/table-personas.component';
import { ServiceTableService } from './index/table-personas/service/service-table.service'

@NgModule({
  declarations: [
    AppComponent,
    AsideCentrosComponent,
    IndexComponent,
    TablePersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServiceTableService, TablePersonasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
