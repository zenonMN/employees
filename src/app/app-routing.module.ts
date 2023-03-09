import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [HomeGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'employees', component: EmployeeComponent, canActivate: [AuthGuard]},
  {path: 'employee-detail', component: EmployeeDetailComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
