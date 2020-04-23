import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PranayamaComponent } from './pranayama/pranayama.component';
import { AsanaComponent } from './asana/asana.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSmallComponent } from './header-small/header-small.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PranayamaComponent,
    AsanaComponent,
    HeaderComponent,
    FooterComponent,
    HeaderSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
