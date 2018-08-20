import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { AboutComponent } from './about/about.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { NavComponent } from './nav/nav.component';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GooglemapComponent } from './contact/googlemap/googlemap.component';
import { GoogleMapService } from './googleMap.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BootcampComponent,
    AboutComponent,
    MembershipsComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    GooglemapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GoogleMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
