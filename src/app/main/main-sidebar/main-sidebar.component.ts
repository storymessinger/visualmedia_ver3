import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

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
      firstLink: ["research", "Rearch"],
      secondLink: [
        ["area", "Research Area"],
        ["projects", "Projects"],
        ["publicate", "Publications"],
        ["publicate_korea", "Publications(Domestic)"],
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

  constructor() {}

  ngOnInit() {}

  }
