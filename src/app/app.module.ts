import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunComponent } from './components/sun/sun.component';
import { CloudsComponent } from './components/clouds/clouds.component';
import { BiuldingComponent } from './components/biulding/biulding.component';
import { StreetComponent } from './components/street/street.component';

@NgModule({
  declarations: [
    AppComponent,
    SunComponent,
    CloudsComponent,
    BiuldingComponent,
    StreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
