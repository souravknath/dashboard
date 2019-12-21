import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule, MatTableModule, MatTreeModule, MatButtonToggleModule, MatProgressBarModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatTreeModule,
    MatProgressBarModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatTableModule,
    MatTreeModule,
    MatProgressBarModule
 ]
})
export class CustomMaterialModule { }
