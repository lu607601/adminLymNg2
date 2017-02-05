import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
	moduleId: module.id,
	selector: 'my-form',
	templateUrl: 'form.component.html',
    providers: [ QuestionService ]
})
export class FormComponent{
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }	
}