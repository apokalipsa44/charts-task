import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { UsersDataPlaceholderComponent } from './main-view-component/users-data-placeholder/users-data-placeholder.component';
import { UsersTableContainerComponent } from 'src/app/components/users-table-container/users-table-container.component';
import { UserChartContainerComponent } from 'src/app/components/user-chart-container/user-chart-container.component';
import { UserChartComponent } from 'src/app/components/user-chart-container/user-chart/user-chart.component';
import { UsersTableComponent } from 'src/app/components/users-table-container/users-table/users-table.component';
import { MainViewComponent } from './main-view-component/main-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgChartsModule } from 'ng2-charts';


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
    MatTableModule,
    FlexLayoutModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'Fetching users data form API...' }),
    NgChartsModule

  ]
})
export class MainViewModule { }
