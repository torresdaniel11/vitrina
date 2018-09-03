import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {MessagesModule} from 'primeng/messages';

/*
  Custom components
*/
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DetailComponent } from './components/detail/detail.component';
import { FilterBrandPipe } from './_pipes/filter-brand.pipe';
import { ComparisonComponent } from './components/comparison/comparison.component';

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
    BrowserAnimationsModule,
    routing,
    FormsModule,
    GalleriaModule,
    CarouselModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
