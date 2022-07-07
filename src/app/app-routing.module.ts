import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent,
		pathMatch: "full"
	},
	{
		path: 'admin',
		component: AdminComponent,
		pathMatch: "full",
		canActivate: [ AuthGuard ]
	},
	{
		path: 'home',
		component: HomeComponent,
		pathMatch: "full"
	},
	{
		path: 'signup',
		component: SignupComponent,
		pathMatch: "full"
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
