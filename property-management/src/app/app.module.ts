import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './src/app/component/properties/properties.component';
import { OwnersComponent } from './src/app/component/owners/owners.component';
import { LeasesComponent } from './src/app/component/leases/leases.component';
import { TenantsComponent } from './src/app/component/tenants/tenants.component';
import { PaymentsComponent } from './src/app/component/payments/payments.component';
import { HeadersComponent } from './src/app/component/headers/headers.component';
import { NavbarComponent } from './src/app/component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    OwnersComponent,
    LeasesComponent,
    TenantsComponent,
    PaymentsComponent,
    HeadersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
