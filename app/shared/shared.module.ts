import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
/*my-header*/
import { HeaderComponent } from './layout/header.component';
/*my-sider*/
import { SiderComponent } from './layout/sider.component';
import {UserService} from "./service/user.service";
import {JwtService} from "./service/jwt.service";
import { ShowAuthedDirective } from './directive/show-authed.directive';
@NgModule({
	imports:[
	   CommonModule,
	   RouterModule
	],
	declarations:[
      HeaderComponent,
      SiderComponent,
      ShowAuthedDirective
	],
	providers:[
      UserService,
      JwtService
	],
	exports:[
      HeaderComponent,
      SiderComponent,
      ShowAuthedDirective
	]
})
export class SharedModule{}