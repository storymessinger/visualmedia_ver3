import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-main', // you dont need this
  template: `
    <app-main-navbar></app-main-navbar>
    <div class="main">
      <app-main-sidebar></app-main-sidebar>
      <router-outlet> </router-outlet>
    </div>
  `
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
