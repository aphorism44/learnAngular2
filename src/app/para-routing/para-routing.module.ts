import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParaPage1Component } from '../para-page1/para-page1.component';
import { ParaPage2Component } from '../para-page2/para-page2.component';

const routes: Routes = [
  {
    path: 'para-page1',
    component: ParaPage1Component,
    outlet: 'para'
  },
  {
    path: 'para-page2/:params',
    component: ParaPage2Component,
    outlet: 'para'
  },
  {
    path: '',
    redirectTo: '/para-page1',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/para-page1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
  , declarations: []
})
export class ParaRoutingModule { }
