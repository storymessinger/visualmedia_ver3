import { SidebarBtnDirective } from './main-sidebar/sidebar-btn.directive';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [ 
    MainSidebarComponent, 
    MainNavbarComponent, 
    MainComponent,
    SidebarBtnDirective
    ],
  imports: [
    CommonModule, 
    FormsModule, 
    HttpModule, 
    MainRoutingModule
  ],
  providers: []
})
export class MainModule { }
