import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'bootcamp', component: BootcampComponent },
  { path: 'memberships', component: MembershipsComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
