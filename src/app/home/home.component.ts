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

  constructor() { }

  ngOnInit() {
  }

}
