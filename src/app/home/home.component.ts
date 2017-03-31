import { ResearchAreaService } from '../shared/researchArea.service';
import { IssuesService } from '../shared/Issues.service';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';

declare var TweenLite, TweenMax, TimelineLite, TimelineMax, Ease, Expo, ScrollMagic :any;

import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';


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
  public researchAreaImgPath:string = this.relPath + "imgs/researchArea/small/";
  public issuesImgPath:string = this.relPath + "imgs/Issues/";

  public logoIconPath:string = this.relPath + "imgs/logo.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_orange_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_orange_36px.svg";

  constructor(
    private issuesService:IssuesService, 
    public researchAreaService:ResearchAreaService,
    private el:ElementRef,
    private scrollSpyService: ScrollSpyService,
    ) { 
    this.issuesByDate = issuesService.getIssues()
      .sort(fieldSorter(['year','month','day']))
      .slice(-10)
      .reverse();

    this.researchArea = researchAreaService.getResearchArea();
    //  router.events.subscribe((event: RouterEvent) => {
    //         this.navigationInterceptor(event);
    //     });
  }

  ngOnInit() {
    this.setScrollMagic();
  }

  setScrollMagic() {
    const controller = new ScrollMagic.Controller();

    
    const navigation_tween = new TimelineMax()
      .to('#logo-animation',0.15, {filter: 'contrast(1) brightness(1)'})
      .to('#nav-animation', 0.15, { backgroundColor:'white'})
      .to('.nav-item a', 0.3, {color:'#262626'})

    const title_tween = TweenLite.to('.title', 0.5, {
      opacity: 0
    })

    const nav_scene = new ScrollMagic.Scene({
      triggerElement: '#nav-trigger'
    })
      .setTween([navigation_tween, title_tween]);

    const scale_tween = TweenLite.to('#scale-animation', 1, {
      transform: 'scale(.1)',
      ease: Expo.easeOut,
      onComplete: console.log('hi')
    });

    const scale_scene = new ScrollMagic.Scene({
      triggerElement: '#scale-trigger'
    })
      .setTween(scale_tween);

    controller.addScene([
      scale_scene,
      nav_scene
    ]);
  }

  clickMenuBtn(event) {
    // 폰 전용 메뉴바 떠야
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