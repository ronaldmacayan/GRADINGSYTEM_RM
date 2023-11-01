import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: "registration",
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: "users",
    loadChildren: () => import('./layout/users/users.module').then(mod => mod.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
