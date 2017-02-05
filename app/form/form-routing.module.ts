import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';

import { AuthGuard } from '../login/auth-guard.service';

@NgModule({
    imports:[
        RouterModule.forChild([
          { 
          	path: '',
          	component: FormComponent,
          	canActivate: [AuthGuard]
          }
        ])
    ],
    exports:[RouterModule]
	})
export class FormRoutingModule{}