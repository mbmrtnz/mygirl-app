import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }