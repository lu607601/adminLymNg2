import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
    imports:[
       FormRoutingModule,
       CommonModule,
       ReactiveFormsModule
       ],
    declarations:[
       FormComponent,
       DynamicFormComponent,
       DynamicFormQuestionComponent
    ]
	})
export class FormModule{}