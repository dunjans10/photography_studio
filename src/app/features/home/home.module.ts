import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { VauchersComponent } from './vauchers/vauchers.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeRoutingModule } from './home-routing-module';

@NgModule({
  imports: [CommonModule, MaterialModule, HomeRoutingModule],
  declarations: [HomeComponent, VauchersComponent],
})
export class HomeModule {}
