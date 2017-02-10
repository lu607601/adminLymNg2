import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoFoundComponent } from './nofound.component';
import { AuthGuard } from '../login/auth-guard.service';
@NgModule({
   imports: [
       RouterModule.forChild([
        {
           path: '',component: NoFoundComponent,
           canActivate: [AuthGuard]
       	}
       	])
   ],
   declarations: [
      NoFoundComponent
   ]
})
export class NoFoundModule{}