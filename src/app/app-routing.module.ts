import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExploreourstoreComponent } from './exploreourstore/exploreourstore.component';
import { HomeComponent } from './home/home.component';
import { OrganicComponent } from './organic/organic.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ExporeourstoreComponent } from './store/exporeourstore/exporeourstore.component';
import { StoreComponent } from './store/store.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {path:'trending',component:TrendingComponent},
  {path:'home',component:HomeComponent},
  {path:'organic',component:OrganicComponent},
  {path:'store',component:StoreComponent,children:[
{path:'exporeourstore',component:ExporeourstoreComponent}
  ]},
  {path:'contact',component:ContactComponent},
  {path:'signin',component:SigninComponent},
  {path:'signout',component:SignoutComponent},

{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
