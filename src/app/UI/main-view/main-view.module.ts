import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { UsersDataPlaceholderComponent } from './main-view-component/users-data-placeholder/users-data-placeholder.component';
import { UsersTableContainerComponent } from 'src/app/ccomponents/users-table-container/users-table-container.component';
import { UserChartContainerComponent } from 'src/app/ccomponents/user-chart-container/user-chart-container.component';
import { UserChartComponent } from 'src/app/ccomponents/user-chart-container/user-chart/user-chart.component';
import { UsersTableComponent } from 'src/app/ccomponents/users-table-container/users-table/users-table.component';
import { MainViewComponent } from './main-view-component/main-view.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    MainViewRoutingModule,
    MatButtonModule,
    FlexLayoutModule

  ]
})
export class MainViewModule { }
