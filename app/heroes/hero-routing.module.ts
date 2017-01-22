import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const heroRoutes: Routes =[
   {path:'heroes',component:HeroesComponent}
];
 
@NgModule({ 
    imports: [ 
      RouterModule.forChild(heroRoutes)
      ],
    exports: [RouterModule]
})
export class HeroRoutingModule {}