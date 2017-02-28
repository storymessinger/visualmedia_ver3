import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-main', // you dont need this
  template: `
    <app-main-navbar [state]="testState" (clicked)="onClicked($event)"></app-main-navbar>
    <div class="main">
      <app-main-sidebar [state]="testState" ></app-main-sidebar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  `]
})
export class MainComponent implements OnInit {

  testState:boolean = false; //default is false

  constructor() { }

  ngOnInit() {
  }

  onClicked(value:boolean) {
    this.testState = value;
  }


}
