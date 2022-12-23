import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { GaleryComponent } from './features/galery/galery.component';
import { StudioComponent } from './features/studio/studio.component';
import { FormComponent } from './features/form/form.component';
import { OutsideStudioComponent } from './features/home/outside-studio/outside-studio.component';
import { InsideStudioComponent } from './features/home/inside-studio/inside-studio.component';
import { OutOfStudioComponent } from './features/home/out-of-studio/out-of-studio.component';
import { HomeModule } from './features/home/home.module';
import { PricesComponent } from './features/prices/prices.component';
import { ActualEventsComponent } from './features/actual-events/actual-events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    GaleryComponent,
    StudioComponent,
    FormComponent,
    OutsideStudioComponent,
    InsideStudioComponent,
    OutOfStudioComponent,
    PricesComponent,
    ActualEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
