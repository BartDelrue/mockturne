import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MuseumpasMatcherComponent } from './components/museumpas-matcher/museumpas-matcher.component';
import { MuseumpasService } from './services/museumpas.service';
import {  HttpClientModule } from '@angular/common/http';
import { TrackerCanvasComponent } from './components/tracker-canvas/tracker-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    MuseumpasMatcherComponent,
    TrackerCanvasComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule
  ],
  providers: [MuseumpasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
