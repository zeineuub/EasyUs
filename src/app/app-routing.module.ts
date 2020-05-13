import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import{ SEComponent} from './se/se.component'

import{ DevComponent} from'./dev/dev.component';

import{NetworkComponent} from'./network/network.component';

import { CompaniesComponent} from './companies/companies.component';

import{ContactComponent} from'./contact/contact.component';
import{AllComponent} from './all/all.component';
import{StageComponent} from './stage/stage.component'
import{NewsComponent} from'./news/news.component';
import{ListeStageComponent} from './liste-stage/liste-stage.component'
import{AuthGuard} from'./auth.guard';

const routes: Routes = [

  {
    path:'contact',
    component:ContactComponent

  },
  {
    path:'listage',
    component:ListeStageComponent,
    /*when we want to navigate to listage route they
    can activate guard only if it's true yaani if
    the user is authenticated */


  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'companies',

    component:CompaniesComponent,

    children:[
      {
        path: '', redirectTo: 'all', pathMatch: 'full'
      },
      {
        path:'all',
        component:AllComponent,

      },
      {
        path:'dev',
        component:DevComponent
      },
      {
        path:'network',
        component:NetworkComponent
      },
      {
        path:'se',
        component: SEComponent
     }

    ]
  },


  {
    path:'home',
    component: HomeComponent,


  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:"stage",
    component:StageComponent,
    canActivate:[AuthGuard]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
