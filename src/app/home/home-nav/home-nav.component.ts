import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {
  public relPath:string = "../../../assets/";
  public logoIconPath:string = this.relPath + "imgs/logo-h100.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_orange_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_orange_36px.svg";

  constructor() { }

  clickMenuBtn(event) {
    console.log(event);
  }
  clickSearchBtn() {
    document.getElementById('searchBar').focus();
  }

  ngOnInit() {
  }

}
