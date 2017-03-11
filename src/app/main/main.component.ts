import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-main', // you dont need this
  template: `
    <app-main-navbar [state]="sidebarState" ></app-main-navbar>
    <div class="main">
      <app-main-sidebar [state]="sidebarState" ></app-main-sidebar>
      <router-outlet ></router-outlet>
    </div>
  `,
  styles: [`
  `]
})
export class MainComponent implements OnInit {

  public sidebarState:boolean = false; //default is false
  public isMouseOnSidebar:boolean;


  constructor() { }

  ngOnInit() {
  }


}
