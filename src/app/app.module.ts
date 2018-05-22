import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { MainRouteComponent } from './main-route/main-route.component';
import { SampleRouteComponent } from './sample-route/sample-route.component';


const routes = [
  { path: '', component: MainRouteComponent },
  { path: 'sampleRoute', component: SampleRouteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SampleRouteComponent,
    MainRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false }),
    IonicModule.forRoot(AppComponent, { locationStrategy: 'path' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
