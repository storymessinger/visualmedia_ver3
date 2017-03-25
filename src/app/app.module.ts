import { ResearchAreaService } from './shared/researchArea.service';
import { IssuesService } from './shared/Issues.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

import { MainModule } from './main/main.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    routing,
    NgbModule.forRoot(), // Add Bootstrap module here.
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXWT_uPQIuxP-10SQ5qYjVslLA-WmOmG4'
    }),
    
  ],
  providers: [
    IssuesService, 
    ResearchAreaService,
    { provide: "windowObject", useValue: window}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
