import { ResearchAreaService } from './../main/main-content/shared/researchArea.service';
import { IssuesService } from './../main/main-content/shared/Issues.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // public relPath:string = "../../../assets/";
  // public logoIconPath:string = this.relPath + "imgs/logo-h100.svg";
  public relPath:string = "../../assets/";
  public mainImgPath:string = this.relPath + "imgs/home_mainImg.jpg";

  public issuesByDate:any;
  public researchArea:any;

  constructor(private issuesService:IssuesService, public researchAreaService:ResearchAreaService) { 
    // console.log(issuesService.getIssues().slice(-9));
    this.issuesByDate = issuesService.getIssues()
      .sort(fieldSorter(['year','month','day']))
      .slice(-10)
      .reverse();

    this.researchArea = researchAreaService.getResearchArea();
  }



  ngOnInit() {
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