import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { ShopComponent } from './_components/shop/shop.component';
import { AdminComponent } from './_components/admin/admin.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
  	path: 'home',
  	component: HomeComponent,
    // canActivate: [AuthGuard, ModuleAccessGuard], 
    // data: { moduleId : 'QUOTE001'}
  },
  {
  	path: 'about',
  	component: AboutComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }