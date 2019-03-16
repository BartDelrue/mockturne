import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MuseumpasMatcherComponent } from './components/museumpas-matcher/museumpas-matcher.component';
import { TrackerCanvasComponent } from './components/tracker-canvas/tracker-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    MuseumpasMatcherComponent,
    TrackerCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
