import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: 'dd', loadChildren: () => import('./UI/main-view/main-view.module').then(m => m.MainViewModule) },
 
  { path: 'main-view', loadChildren: () => import('./UI/main-view/main-view.module').then(m => m.MainViewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
