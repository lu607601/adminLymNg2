import { Component } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html'
})

export class HeroesComponent {
   selectedHero:Hero;
   heroes: Hero[] = Heroes;
   onSelected(hero:Hero):any {
      this.selectedHero = hero;
   }
   goDetail(hero:Hero){

   }
}