import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { FollowersComponent } from './pages/followers/followers.component';
import { FollowingComponent } from './pages/following/following.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { SearchComponent } from './pages/search/search.component';
import { StarredComponent } from './pages/starred/starred.component';

const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"login",
component:LoginComponent
  },{
  path:"dashboard",
  component:HomeComponent
  },
  {path:"personal", component:PersonalComponent},
  {path:"starred", component:StarredComponent},
  {path:"followers", component:FollowersComponent},
  {path:"following", component:FollowingComponent},
  {path:"search", component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
