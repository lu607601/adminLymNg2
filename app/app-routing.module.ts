import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth-guard.service';
const routes: Routes = [
    {path:'heroes',loadChildren:'app/heroes/heroes.module#HeroesModule'},
    {path:'form',loadChildren:'app/form/form.module#FormModule', canLoad: [AuthGuard]},
    {path:'', redirectTo: '/login', pathMatch: 'full'}
];
@NgModule({
    imports:[
         RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {}