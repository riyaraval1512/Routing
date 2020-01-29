import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeDirective } from './grade.directive';



@NgModule({
  declarations: [
    GradeDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GradeDirective
  ]
})
export class DirectivesModule { }
