import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { AboutComponent } from './about/about.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { NavComponent } from './nav/nav.component';
import { routes } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      BootcampComponent,
      AboutComponent,
      MembershipsComponent,
      NavComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
