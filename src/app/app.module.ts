import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CvLibraryModule } from 'cv-library';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,

    CvLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
