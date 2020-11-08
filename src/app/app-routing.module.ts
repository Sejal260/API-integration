import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CoronaComponent } from './corona/corona.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [];
{
  path: '',
  redirectTo;'/login'
  pathMatch:'full'
}
{
  path:'login',
  component; LoginComponent
}
{
  path:'signin',
  component; SigninComponent
}
{
  path: 'corona',
  component; CoronaComponent,
  canActivate;[AuthGuard]
}
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
