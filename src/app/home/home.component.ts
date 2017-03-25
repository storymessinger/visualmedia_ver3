import { ResearchAreaService } from '../shared/researchArea.service';
import { IssuesService } from '../shared/Issues.service';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';

import { TweenLite } from 'gsap';
import { TimelineLite } from 'gsap';
import { TweenMax } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public relPath:string = "../../assets/";
  public issuesByDate:any;
  public researchArea:any;
  public mainImgPath:string = this.relPath + "imgs/home_mainImg.jpg";
  public logoIconPath:string = this.relPath + "imgs/logo-h100.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_orange_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_orange_36px.svg";

  public offsetY;


  constructor(
    private issuesService:IssuesService, 
    public researchAreaService:ResearchAreaService,
    @Inject("windowObject") {window: Window},
    private el:ElementRef
    ) { 
    this.issuesByDate = issuesService.getIssues()
      .sort(fieldSorter(['year','month','day']))
      .slice(-10)
      .reverse();

    this.researchArea = researchAreaService.getResearchArea();
  }

  ngOnInit() {
  // var top  = window.pageYOffset || document.documentElement.scrollTop,
  //   left = window.pageXOffset || document.documentElement.scrollLeft;
    const navbar =  (this.el.nativeElement.querySelector('#navbar'));
    const tl = 
    navbar.animation = new TimelineLite({paused:true})
      .to(navbar, 0.3, {
        //box-shadow
        //border
        top:0,
        backgroundColor:'white',
        opacity:1
      })


    this.offsetY = window.pageYOffset;
    TweenLite.ticker.addEventListener("tick",testing);
    function testing() {
      console.log(window.pageYOffset);
    }

    // Navbar Change
    let isColored= false;

    // setNavbarColor
    TweenLite.ticker.addEventListener("tick",setNavbarColor);
    function setNavbarColor() {
      if ( window.pageYOffset > 600 && isColored == false) {
        navbar.animation.play();
        isColored = true;
      } else if (window.pageYOffset < 600 && isColored == true) {
        navbar.animation.reverse();
        isColored = false;
      }
    }

  }

  clickMenuBtn(event) {
    // 폰 전용 메뉴바 떠야
    console.log(event);
  }
  clickSearchBtn() {
    // 검색기능떠야함 
    document.getElementById('searchBar').focus();
  }


}

function fieldSorter(fields) {
    return function (a, b) {
        return fields
            .map(function (item) {
                var dir = 1;
                if (item[0] === '-') {
                   dir = -1;
                   item=item.substring(1);
                }
                if (a[item] > b[item]) return dir;
                if (a[item] < b[item]) return -(dir);
                return 0;
            })
            .reduce(function firstNonZeroValue (p,n) {
                return p ? p : n;
            }, 0);
    };
}