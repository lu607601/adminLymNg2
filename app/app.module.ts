import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*app*/
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
/*heroes*/

/*my-header*/
import { HeaderComponent } from './shared/layout/header.component';
/*my-sider*/
import { SiderComponent } from './shared/layout/sider.component';

/*module*/
import { LoginRoutingModule } from './login/login-routing.module';
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
      LoginRoutingModule, 
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
      AppComponent,
      HeaderComponent,
      SiderComponent,
      LoginComponent
   ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
