import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth-guard.service';
import { LoginComponent }  from './login/login.component';

const routes: Routes = [
    { path:'heroes',loadChildren:'app/heroes/heroes.module#HeroesModule' },
    { path:'form',loadChildren:'app/form/form.module#FormModule' },
    { path:'nofound',loadChildren:'app/nofound/nofound.module#NoFoundModule' },
    { path:'', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];
@NgModule({
    imports:[
         RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {}