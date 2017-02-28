import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      width: 100%;
    }
  `]
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
