import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { ActualEventsComponent } from './features/actual-events/actual-events.component';
import { FormComponent } from './features/form/form.component';
import { GaleryComponent } from './features/galery/galery.component';
import { PricesComponent } from './features/prices/prices.component';
import { StudioComponent } from './features/studio/studio.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'about-us', component: AboutusComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'appointments', component: FormComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'actual-events', component: ActualEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
