import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { SharedComponentModule } from '../component/shared-component.module';



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedComponentModule
  ]
})
export class TeachersModule { }
