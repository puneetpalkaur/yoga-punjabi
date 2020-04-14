import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PranayamaComponent} from './pranayama/pranayama.component';
import {AsanaComponent} from './asana/asana.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'pranayama', component: PranayamaComponent },
  { path: 'asana', component: AsanaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
