import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes,RouterModule} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContentComponent} from "./content/content.component";
import {MainProductComponent} from "./main-product/main-product.component";
import {MainProviderComponent} from "./main-provider/main-provider.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {FormAddUserComponent} from "./form-add-user/form-add-user.component";


const Routes: Routes=[
  {path:'user',component:MainUserComponent,children:[
      {path:'category/:category',component:ListUserComponent}
    ]},
  {path:'provider',component:MainProviderComponent},
  {path:'product',component:MainProductComponent},
  {path:'subscribe',component:FormAddUserComponent},
  {path:'',component:ContentComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
