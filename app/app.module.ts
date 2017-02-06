import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*app*/
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
/*module*/
import {SharedModule} from './shared/shared.module';
/*memoryDB*/
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './heroes/in-memory-data.service';

import { AuthService }          from './login/auth.service';
import { AuthGuard }            from './login/auth-guard.service';

import { LoginComponent }       from './login/login.component';
@NgModule({
  imports:      [ 
      BrowserModule,
      AppRoutingModule, 
      SharedModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
      AppComponent,
      LoginComponent
   ],
  providers: [
      AuthGuard,
      AuthService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
