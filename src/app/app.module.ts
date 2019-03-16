import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MuseumpasMatcherComponent } from './components/museumpas-matcher/museumpas-matcher.component';
import { MuseumpasService } from './services/museumpas.service';
import { HttpClientModule } from '@angular/common/http';
import { TrackerCanvasComponent } from './components/tracker-canvas/tracker-canvas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootComponent } from './components/root/root.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'depot', component: AppComponent },
  { path: 'mockturne', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  providers: [MuseumpasService],
  bootstrap: [RootComponent],
})
export class AppModule {}
