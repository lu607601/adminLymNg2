import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HeroRoutingModule } from './hero-routing.module';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
@NgModule({
   imports:[
      CommonModule,
      HeroRoutingModule
   ],
   declarations:[
      HeroesComponent,
      HeroDetailComponent
   ]
})
export class HeroesModule {}
