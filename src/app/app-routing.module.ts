import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import{NSLEAMComponent} from'./n-sleam/n-sleam.component';
import{ NgenieComponent} from './ngenie/ngenie.component'
import{ NTWINComponent} from'./n-twin/n-twin.component';
import{ NNIDSComponent} from './n-nids/n-nids.component';
import{NArTicComponent} from'./n-ar-tic/n-ar-tic.component';

import { CompaniesComponent} from './companies/companies.component';
import {InfiniComponent} from'./infini/infini.component';
import{ContactComponent} from'./contact/contact.component';
import{AllComponent} from './all/all.component';
import{SIMComponent} from'./sim/sim.component';




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
        path:'ngenie',
        component:NgenieComponent
      },
      {
        path:'nTwin',
        component:NTWINComponent
      },
      {
        path:'nArTic',
        component: NArTicComponent
     },
     {
       path:'nNIDS',
       component:NNIDSComponent
     },
     {
       path:'nSLEAM',
       component:NSLEAMComponent
     },

     {
       path:'nInFinI',
       component:InfiniComponent
     },
     {
       path:'nSIM',
       component:SIMComponent
     }

    ]
  },
  {
    path:'home',
    component: HomeComponent
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
