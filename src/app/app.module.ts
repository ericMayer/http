import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MenuComponent } from './core/menu/menu.component';
import { SharedModule } from './shared/modules/shared.module';
import { MaterialModule } from './shared/modules/material.module';
import { PageComponent } from './core/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
