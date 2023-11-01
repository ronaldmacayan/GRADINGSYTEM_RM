import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const Routes : Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "", redirectTo: "dashboard", pathMatch: "prefix",
      },
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: "users",
        loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule),
      },
      {
        path: "students",
        loadChildren: () => import('./students/students.module').then(mod => mod.StudentsModule),
      },
      {
        path: "teachers",
        loadChildren: () => import('./teachers/teachers.module').then(mod => mod.TeachersModule),
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
