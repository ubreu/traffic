import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PathSegment, RoutesPath } from './infra/path';

import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: RoutesPath.OVERVIEW, component: OverviewComponent, pathMatch: 'full' },
  { path: RoutesPath.DETAILS, component: DetailComponent, pathMatch: 'full' },
  { path: '**', redirectTo: RoutesPath.OVERVIEW }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
