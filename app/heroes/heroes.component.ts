import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit{
   selectedHero:Hero;
   heroes: Hero[];
   constructor(private router:Router, private heroService:HeroService){}
   ngOnInit(): void{
      this.getHeroes();
   }
   getHeroes():void{
       this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
   }
   onSelected(hero:Hero):any {
      this.selectedHero = hero;
   }
   goDetail(){
      this.router.navigate(['/detail', this.selectedHero.id]);
   }
   delet(hero:Hero):void{
      this.heroService.delet(hero.id)
      .then(()=>{
          this.heroes = this.heroes.filter(h=>h!=hero);
          if(this.selectedHero === hero ) { this.selectedHero = null;}
        });
   }
   add(name:string){
      this.heroService.create(name)
       .then(hero => {
         this.heroes.push(hero);
         this.selectedHero == null;
        });
   }
}