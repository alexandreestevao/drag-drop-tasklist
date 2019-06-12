import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { AlertModule } from 'ngx-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    HomeComponent,
    AboutComponent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    DragDropModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
