import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CustomHammerConfig } from './hammer-config';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CotizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    FormsModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
