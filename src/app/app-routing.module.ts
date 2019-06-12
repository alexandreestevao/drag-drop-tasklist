import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'taskManager', component: TaskManagerComponent },
  {
    path: '**', component: Error404Component
  }

];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
