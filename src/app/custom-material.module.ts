import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatCardModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule,
    MatGridListModule
 ]
})
export class CustomMaterialModule { }
