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
import {CarouselModule} from 'primeng/carousel';

/*
  Custom components
*/
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DetailComponent } from './components/detail/detail.component';
import { FilterBrandPipe } from './_pipes/filter-brand.pipe';
import { ComparisonComponent } from './comparison/comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DetailComponent,
    FilterBrandPipe,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    GalleriaModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
