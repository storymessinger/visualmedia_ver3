import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <p>it worked</p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
