import { SearchService } from './../../shared/search.service';
import { Component, Output, Input, EventEmitter, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router'; 
import "rxjs/add/operator/filter";

import { TweenLite, TimelineLite, TweenMax, TimelineMax } from 'gsap';

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit { 

  //imgs
  public relPath:string = "../../../assets/";
  public logoPath:string = this.relPath + "imgs/logo-white.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_white_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_white_36px.svg";

  //Tweenlite test
  public test = {
    number : 1
  };
  test2 :any;


  //
  breadcrumbs:IBreadcrumb[];
  myChildren:any;

  @ViewChild('someVar') testEl:ElementRef;

  constructor( 
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private el:ElementRef,
    private searchService:SearchService ) {
      this.breadcrumbs = [];
      console.log(searchService.getSearch('3d character animator'));
  }

  // loop() {
  //   console.log(this.test2);
  // }
  // init() {
  //   TweenLite.to(this.test, 2, {number:100} );
  //   TweenLite.ticker.addEventListener("tick",this.loop);
  // }

  @Input() state;
  @Output() sidebarClick = new EventEmitter<string>();

  ngOnInit() {
    const self = this;
    const test3 = this.test2;
    
    this.test2 =  (this.el.nativeElement.querySelector('#tween'));
    // const tweenTest = (this.el.nativeElement.querySelector('#tween'));
    // TweenLite.to( tweenTest, 3, {backgroundColor:"#ff0000"});

    const tl = new TimelineMax()
      .from( this.test2, 1.5, {
        backgroundColor: "#ffffff",
        boxShadow: "0 1.5px 4px rgba(0,0,0,0.05)",
        right: "100vw",
        ease: "Expo.easeInOut"
      })
      .from (this.test2, 0.3, {
        color: "rgba(255,255,255,0)"
      })


    TweenLite.ticker.addEventListener("tick",loop);
    function loop() {
      // console.log(self.test2);
    }
    

    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
    //subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  
  startSearch() { 
  }

  onClicked() {
    this.state = !this.state;
    this.sidebarClick.emit(this.state);
  }

  ////

  getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]):IBreadcrumb[] {

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
