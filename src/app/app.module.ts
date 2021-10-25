import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { ListUserComponent } from './list-user/list-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent,
    ListUserComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    NotFoundComponent,
    FormAddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
