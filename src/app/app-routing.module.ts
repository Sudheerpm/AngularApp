import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjusterComponent } from './adjuster/adjuster.component';

const routes: Routes = [
  { path: '', redirectTo: 'adjuster', pathMatch: 'full' },
{path:'adjuster', component:AdjusterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
