import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { UseCaseComponent } from './components/use-case/use-case.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'use-case/:slug', component: UseCaseComponent },
  { path: '**', redirectTo: '' }
];
