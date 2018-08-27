import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'memberships', component: MembershipsComponent },
  { path: 'bootcamp', component: BootcampComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
