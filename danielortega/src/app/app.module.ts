import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/componentes/navbar/navbar.component';
import { HomeComponent } from './components/componentes/home/home.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { Page01Component } from './components/componentes/page01/page01.component';
import { Page02Component } from './components/componentes/page02/page02.component';
import { Page03Component } from './components/componentes/page03/page03.component';
import { APP_ROUTING } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    Page01Component,
    Page02Component,
    Page03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
