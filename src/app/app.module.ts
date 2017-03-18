import { ResearchAreaService } from './main/main-content/shared/researchArea.service';
import { IssuesService } from './main/main-content/shared/Issues.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';

import { routing } from './app.routing';

import { MainModule } from './main/main.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    routing,
    NgbModule.forRoot() // Add Bootstrap module here.
  ],
  providers: [IssuesService, ResearchAreaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
