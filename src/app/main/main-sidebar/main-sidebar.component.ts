import {
  Component,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  template: `
  <div class="sidebar" [ngClass]='{"open":state}'>
    <div class="sidebarInner">
      <nav>
        <dl *ngFor="let link of sbLinks">
          <dt (click)="link.isOpen = !link.isOpen">{{link.firstLink[1]}}</dt>
          <div class="navbar_list">
            <dd [ngClass]="{'open': link.isOpen}" >
              <a routerLinkActive="active" *ngFor="let subLink of link.secondLink" (click)='sbMenuClicked()' routerLink="content/{{subLink[0]}}" >{{subLink[1]}}</a>
            </dd>
          </div>
        </dl>
      </nav>
      <div class="legal"></div>
    </div>
  </div>
  <div class="make_dimmer" [ngClass]='{"dimmer":state}'></div>
  `,
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent {

  sbLinks: any[] = [
    {
      firstLink: ["about", "About"],
      secondLink: [
        ["info", "About us"],
        ["admission", "About Admission"]
      ]
    },
    {
      firstLink: ["member", "Member"],
      secondLink: [
        ["all", "Professor"],
        ["all", "Student"]
      ]
    },
    {
      firstLink: ["research", "Research"],
      secondLink: [
        ["area", "Research Area"],
        ["projects", "Projects"],
        ["publicate", "Publications"],
        ["publicate_kr", "Publications(Domestic)"],
        ["thesis", "Thesis"]
      ]
    },
    {
      firstLink: ["issues", "News and Events"],
      secondLink: [
        ["news", "News"],
        ["media", "Media Report"],
        ["life", "VML Life"]
      ]
    },
    {
      firstLink: ["archive", "Archive"],
      secondLink: [
        ["downloads", "Downloads"],
        ["seminar", "Media Report"]
      ]
    },
  ]

  @Input() state;
  @Output() clicked = new EventEmitter<string>();
  
  constructor(){}

  sbMenuClicked() {
    this.state = !this.state;
    this.clicked.emit(this.state);
  }





  }
