import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component'
import { LandingComponent } from './components/landing/landing.component'

const appRoutes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'detail/:carId', component: DetailComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
