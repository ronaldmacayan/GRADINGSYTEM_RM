import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';

const Routes : Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(Routes)],
    exports: [RouterModule]
  })
export class RegistrationRoutingModule { }
