import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddedSuccessfullyComponent } from './added-successfully/added-successfully.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { RatingAddedSuccessfullyComponent } from './rating-added-successfully/rating-added-successfully.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent,canActivate:[AuthGuardService]},
  {path:'InvalidCredentials',component:InvalidCredentialsComponent},
  {path:'add/cart/:id',component:AddToCartComponent},
  {path:'addedsuccessfully',component:AddedSuccessfullyComponent},
  { path:'productDetail/:id', component:ProductDetailsComponent},
  {path:'addrating',component:AddRatingComponent},
  {path:'ratingadded',component:RatingAddedSuccessfullyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
