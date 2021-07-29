import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './auth-guard.service';
import { AuthServiceService } from './auth-service.service';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddedSuccessfullyComponent } from './added-successfully/added-successfully.component';
import { ProductComponent } from './product/product.component';

import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { RatingAddedSuccessfullyComponent } from './rating-added-successfully/rating-added-successfully.component';

export function tokenGetter(){
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvalidCredentialsComponent,
    HomeComponent,
    AddToCartComponent,
    AddedSuccessfullyComponent,
    ProductComponent,
    
    HeaderComponent,
    ProductDetailsComponent,
    AddRatingComponent,
    RatingAddedSuccessfullyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:37571"],
        disallowedRoutes:[]
      }
    }),

  ],
  providers: [AuthGuardService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
