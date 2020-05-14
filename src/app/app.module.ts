import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatInputModule} from '@angular/material/input'



import {MatSelectModule} from '@angular/material/select';


import {MatFormFieldModule} from '@angular/material/form-field';
import { SEComponent } from './se/se.component';
import { NetworkComponent } from './network/network.component';

import { DevComponent } from './dev/dev.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CompaniesComponent } from './companies/companies.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider,AuthService } from "angularx-social-login";
import { NewsApiService } from'./services/newsapi.service';
import { HttpClientModule,HTTP_INTERCEPTORS  }  from'@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StageComponent } from './stage/stage.component';
import{StagesService} from './services/stages.service';
import { ListeStageComponent } from './liste-stage/liste-stage.component';
import { NewsComponent } from './news/news.component'
import { AuthGuard } from './auth.guard';

import {TokenInterceptorService} from './services/token-interceptor.service'
 //configure it in an object
 let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("15218572080-17h4brabbej2b4u22ll2j9ajs8idtmiq.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("230244308174898")
  }
])

@NgModule({
  declarations: [
    AppComponent,
    SEComponent,
    NetworkComponent,
    NetworkComponent,
    SEComponent,
    DevComponent,
    HomeComponent,
    ErrorComponent,
    CompaniesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    StageComponent,
    ListeStageComponent,
    NewsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule ,
    SocialLoginModule.initialize(config),
    MatSelectModule,
    ReactiveFormsModule,
    HttpModule,


  ],
  providers:
  [
      NewsApiService,
      AuthService,
      HttpClientModule,
      StagesService,
      AuthGuard,

      {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
      }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
