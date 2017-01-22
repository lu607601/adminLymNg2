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

import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports:      [ 
      BrowserModule,
      AppRoutingModule,
      HeroesModule
  ],
  declarations: [ 
      AppComponent,
      HeaderComponent,
      SiderComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
