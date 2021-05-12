import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';


@NgModule({ //decorador
  declarations: [ //irán los componentes
    AppComponent,
  ],
  imports: [ //irán los módulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], //servicios especiales
  bootstrap: [AppComponent] //módulo principal
})
export class AppModule { }
