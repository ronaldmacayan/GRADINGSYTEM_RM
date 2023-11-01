import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';

const Routes : Routes = [
  {
    path: '',
    component: TeachersComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
