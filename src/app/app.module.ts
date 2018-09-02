import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
/*
  Routing configuration file
*/
import { routing } from './app.routing';

/*
Prime ng components
*/

import {GalleriaModule} from 'primeng/galleria';

/*
  Custom components
*/
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DetailComponent } from './components/detail/detail.component';
import { FilterBrandPipe } from './_pipes/filter-brand.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DetailComponent,
    FilterBrandPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
