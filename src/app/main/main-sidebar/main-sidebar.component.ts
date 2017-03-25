import { ScrollAbleService } from '../../shared/scroll-able.service';
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
          data: "Admission",
          innerLink: []
        },
        { 
          url: "partners",
          data: "Partners",
          innerLink: []
        }
      ]
    },
    {
      firstLink: ["member", "People"],
      secondLink: [
        { 
          url: "all",
          data: "Professor",
          innerLink: []
        },
        { 
          url: "all",
          data: "Doctor",
          innerLink: []
        },
        { 
          url: "all",
          data: "Master",
          innerLink: []
        },
        { 
          url: "all",
          data: "Researcher",
          innerLink: []
        },
        { 
          url: "all",
          data: "Alumni(Docter)",
          innerLink: []
        },
        { 
          url: "all",
          data: "Alumni(Master)",
          innerLink: []
        },
        { 
          url: "all",
          data: "Former",
          innerLink: []
        },
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
  
  constructor(public el:ElementRef, private scrollAbleService:ScrollAbleService){

  }

  setScroll(data) { 
    this.scrollAbleService.setScroll(data);
  }
  clearMessage() {
    this.scrollAbleService.clearMessage();
  }

  sidebarNavConnect() {
    this.state = !this.state;
    this.clicked.emit(this.state);
  }

  toggleMenu(data) {
    if (this.activeLink != data){
      this.activeLink = data;
    } else {
      this.activeLink = null;
    }
  }
  toggleSubMenu(data) {
    if (this.subActiveLink != data) {
      this.subActiveLink = data;
    } else {
      this.subActiveLink = null;
    }
    // if there is anything to scroll
    this.setScroll(data);
  }

  clickSubSubMenu(data) {
    // if there is anything to scroll
    this.setScroll(data);
  }

}
