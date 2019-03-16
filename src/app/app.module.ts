import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MuseumpasMatcherComponent } from './components/museumpas-matcher/museumpas-matcher.component';
import { MuseumpasService } from './services/museumpas.service';
import { HttpClientModule } from '@angular/common/http';
import { TrackerCanvasComponent } from './components/tracker-canvas/tracker-canvas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootComponent } from './components/root/root.component';

const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MuseumpasMatcherComponent,
    TrackerCanvasComponent,
    PageNotFoundComponent,
    RootComponent,
  ],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [MuseumpasService],
  bootstrap: [RootComponent],
})
export class AppModule {}
