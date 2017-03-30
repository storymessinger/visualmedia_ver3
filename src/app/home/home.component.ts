import { ResearchAreaService } from '../shared/researchArea.service';
import { IssuesService } from '../shared/Issues.service';
import { Component, OnInit, Inject, ElementRef, AfterViewInit } from '@angular/core';

import { TweenLite } from 'gsap';
import { TimelineLite } from 'gsap';
import { TweenMax } from 'gsap';
import { Ease } from 'gsap';

import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';

// import * as ScrollMagic from 'ScrollMagic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  public relPath:string = "../../assets/";
  public issuesByDate:any;
  public researchArea:any;
  public mainImgPath:string = this.relPath + "imgs/home_mainImg.jpg";
  public logoIconPath:string = this.relPath + "imgs/logo-h100.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_orange_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_orange_36px.svg";

  constructor(
    private issuesService:IssuesService, 
    public researchAreaService:ResearchAreaService,
    private el:ElementRef,
    private scrollSpyService: ScrollSpyService

    ) { 
    this.issuesByDate = issuesService.getIssues()
      .sort(fieldSorter(['year','month','day']))
      .slice(-10)
      .reverse();

    this.researchArea = researchAreaService.getResearchArea();

    // let testCont = new ScrollMagic.Controller();
    // testCont.addScene([
    //   this.scale_scene,
    // ]);

  }

  // scale_tween = TweenLite.to('#scale-animation', 1, {
  //   transform: 'scale(.75)'
  //   // ease: Expo.easeOut
  // });
  // // Scale Scene
  // scale_scene = new ScrollMagic.Scene({
  //   triggerElement: '#scale-trigger'
  // })
  // .setTween(this.scale_tween);

  ngOnInit() {
  }

  setNavbarColor(offsetY) {
    const navbar =  (this.el.nativeElement.querySelector('#navbar'));
    navbar.animation = new TimelineLite({paused:true})
      .to(navbar, 0.3, {
        //box-shadow
        //border
        top:0,
        backgroundColor:'white',
        opacity:1
      })

    let state = navbar.style['opacity'];
    console.log('on');

    if (offsetY > 600 && state == 0) {
      console.log('on');
      navbar.animation.play();
    } else if (offsetY <= 600 && state == 1) {
      console.log('off');
      navbar.animation.reverse();
    }
  }

  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
        this.setNavbarColor(e.path[1].pageYOffset);
    });
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