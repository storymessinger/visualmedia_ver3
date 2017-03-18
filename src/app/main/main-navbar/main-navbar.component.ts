import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router'; 
import "rxjs/add/operator/filter";

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-main-navbar',
  template: `
  <div class="breadcrumb-row row">
    <ol class="breadcrumb col-xs">
      <a routerLink="">
        <img [src]='logoPath' height="56" class="logo-white">
      </a>
      <li>
        <img [src]='menuIconPath' (click)='onClicked()' fill-opacity="0" width="30px" class="sb_menu">
      </li>

      <li class="search">
        <img [src]='searchIconPath' fill-opacity="0" width="30px" class="search_btn" />
        <input class="search_bar" />
      </li>

      <li class="breadcrumb-item"><a class="bodyText" routerLink="">Home</a></li>

      <li class="breadcrumb-item" *ngFor="let breadcrumb of breadcrumbs">
        <a class="bodyText" routerLink="{{breadcrumb.url}}">{{breadcrumb.label}}</a>
      </li>

    </ol>
  </div>
  `,
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit { 

  //imgs
  public relPath:string = "../../../assets/";
  public logoPath:string = this.relPath + "imgs/logo-white.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_white_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_white_36px.svg";

  //
  breadcrumbs:IBreadcrumb[];
  myChildren:any;

  constructor( private router:Router, private activatedRoute:ActivatedRoute ) {
    // this.breadcrumbs =  ['home', ...this.router.url.split('/').slice(2)]
    // this.breadcrumbs = this.router.url.split('/');
    this.breadcrumbs = [];
  }

  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  @Input() state;
  @Output() sidebarClick = new EventEmitter<string>();
  
  onClicked() {
    this.state = !this.state;
    this.sidebarClick.emit(this.state);
  }

  ////

  private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]):IBreadcrumb[] {

    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;
    this.myChildren = children;


    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      if (url.slice(-1) === '/') { url = url.slice(0,-1); } //polyfill
      url += `/${routeURL}`;

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };

      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

  return breadcrumbs;

  }



}
