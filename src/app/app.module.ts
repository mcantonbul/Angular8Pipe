import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPipe } from './pipes/basic/basic.pipe';
import { BasicusageComponent } from './usages/basicusage/basicusage.component';
import { AngularpipesComponent } from './usages/angularpipes/angularpipes.component';

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

registerLocaleData(localeTr, 'tr');

@NgModule({
  declarations: [
    AppComponent,
    BasicPipe,
    BasicusageComponent,
    AngularpipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
