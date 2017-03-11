import {
  Component,
  Output,
  Input,
  EventEmitter,
  Directive,
  ElementRef,
  Renderer,
  HostListener
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
        { 
          url: "info",
          data: "About us",
          innerLink: []
        },
        { 
          url: "admission",
          data: "About Admission",
          innerLink: []
        }
      ]
    },
    {
      firstLink: ["member", "Member"],
      secondLink: [
        { 
          url: "all",
          data: "Student",
          innerLink: []
        }
      ]
    },
    {
      firstLink: ["research", "Research"],
      secondLink: [
        { 
          url: "area",
          data: "Research Area",
          innerLink: ["ABC", "CDF", "DEV"]
        },
        { 
          url: "projects",
          data: "Projects",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "publicate",
          data: "Publicationss",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "publicate_kr",
          data: "Publications(Domestic)",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "thesis",
          data: "Thesis",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        }
      ]
    },
    {
      firstLink: ["issues", "News and Events"],
      secondLink: [
        { 
          url: "news",
          data: "News",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "media",
          data: "Media Report",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "life",
          data: "VML Life",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        }
      ]
    },
    {
      firstLink: ["archive", "Archive", []],
      secondLink: [
        { 
          url: "downloads",
          data: "Downloads",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        },
        { 
          url: "seminar",
          data: "Seminar",
          innerLink: ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
        }
      ]
    },
  ]
  public activeLink:any;
  public subActiveLink:any;

  @Input() state;
  @Output() clicked = new EventEmitter<string>();
  
  constructor(){}

  sbMenuClicked() {
    this.state = !this.state;
    this.clicked.emit(this.state);
  }
}
