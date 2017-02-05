import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
const heroRoutes: Routes =[
   {path:'',component:HeroesComponent},
   {path:'dashboard',component:DashBoardComponent},
   {path:'detail/:id',component:HeroDetailComponent}
    /* 
   {
   	path: '',
   	component:HeroesComponent,
   	children:[
        {path:'dashboard',component:DashBoardComponent},
        {path:'detail/:id',component:HeroDetailComponent},
        {path:'',component:HeroesComponent}
   	]
    } */
];
 
@NgModule({ 
    imports: [ 
      RouterModule.forChild(heroRoutes)
      ],
    exports: [RouterModule]
})
export class HeroRoutingModule {}