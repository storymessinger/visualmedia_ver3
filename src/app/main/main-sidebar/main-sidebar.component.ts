import { SidebarFoldService } from './../sidebar-fold.service';
import {
  Component,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
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
        ["head", "Professor"],
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
