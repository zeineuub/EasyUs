import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import{ SEComponent} from './se/se.component'

import{ DevComponent} from'./dev/dev.component';

import{NetworkComponent} from'./network/network.component';

import { CompaniesComponent} from './companies/companies.component';

import{ContactComponent} from'./contact/contact.component';
import{AllComponent} from './all/all.component';





const routes: Routes = [

  {
    path:'contact',
    component:ContactComponent

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
        component:AllComponent
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
