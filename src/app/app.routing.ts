import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component'
import { LandingComponent } from './landing/landing.component'

const appRoutes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'detail', component: DetailComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
