import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { FormComponent } from './features/form/form.component';
import { GaleryComponent } from './features/galery/galery.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
