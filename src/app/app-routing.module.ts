import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CompaniesComponent} from './companies/companies.component';
import{ContactComponent} from'./contact/contact.component';
import{AllComponent} from './all/all.component';
import{StageComponent} from './stage/stage.component'
import{NewsComponent} from'./news/news.component';
import{ListeStageComponent} from './liste-stage/liste-stage.component'
import{AuthGuard} from'./auth.guard';
import{ContacompanyComponent} from './contacompany/contacompany.component';
import{ChangepassComponent} from './changepass/changepass.component';
import{ResetComponent} from'./reset/reset.component';
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
    path:'reset',
    component:ResetComponent

  },
  {
    path:'changepass',
    component:ChangepassComponent
  },
  {
    path:'contacompany',
    component:ContacompanyComponent
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
