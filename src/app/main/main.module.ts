import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    HttpModule, 
    MainRoutingModule
  ],
  declarations: [ MainSidebarComponent, MainNavbarComponent,  MainComponent ],
  providers: []
})
export class MainModule { }
