import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { MainViewComponent } from './main-view.component';
import { UsersDataPlaceholderComponent } from './users-data-placeholder/users-data-placeholder.component';
import { UsersTableContainerComponent } from 'src/app/ccomponents/users-table-container/users-table-container.component';
import { UserChartContainerComponent } from 'src/app/ccomponents/user-chart-container/user-chart-container.component';
import { UserChartComponent } from 'src/app/ccomponents/user-chart-container/user-chart/user-chart.component';
import { UsersTableComponent } from 'src/app/ccomponents/users-table-container/users-table/users-table.component';


@NgModule({
  declarations: [
    MainViewComponent,
    UsersDataPlaceholderComponent,
    UsersTableContainerComponent,
    UsersTableComponent,
    UserChartContainerComponent,
    UserChartComponent,

  ],
  imports: [
    CommonModule,
    MainViewRoutingModule
  ]
})
export class MainViewModule { }
