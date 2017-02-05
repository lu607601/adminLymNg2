import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HeroRoutingModule } from './hero-routing.module';
import { HttpModule }    from '@angular/http';

import { DashBoardComponent } from './dashboard.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service';


@NgModule({
   imports:[
      CommonModule,
      HeroRoutingModule,
      FormsModule,
      HttpModule
   ],
   declarations:[
      HeroesComponent,
      DashBoardComponent,
      HeroDetailComponent,
      HeroSearchComponent
   ],
   providers:[ HeroService ]
})
export class HeroesModule {}
