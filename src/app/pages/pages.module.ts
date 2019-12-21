import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonutComponent } from './charts/donut/donut.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material.module';
import { TableStickyColumnsComponent } from './table-sticky-columns/table-sticky-columns.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupBarComponent } from './charts/group-bar/group-bar.component';


const routes: Routes = [{path:'',component:DashboardComponent}];
@NgModule({
  declarations: [DashboardComponent, DonutComponent, TableStickyColumnsComponent, GroupBarComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    CustomMaterialModule
  ]
})
export class PagesModule { }
