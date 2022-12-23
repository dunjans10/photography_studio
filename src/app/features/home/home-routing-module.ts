import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { InsideStudioComponent } from './inside-studio/inside-studio.component';
import { OutOfStudioComponent } from './out-of-studio/out-of-studio.component';
import { OutsideStudioComponent } from './outside-studio/outside-studio.component';
import { VauchersComponent } from './vauchers/vauchers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'vauchers', component: VauchersComponent },
  { path: 'studio-outside', component: OutsideStudioComponent },
  { path: 'studio-inside', component: InsideStudioComponent },
  { path: 'out-of-studio', component: OutOfStudioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
