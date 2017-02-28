import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent {

  //imgs
  public relPath:string = "../../../assets/";
  public logoPath:string = this.relPath + "imgs/logo-white.svg";
  public menuIconPath:string = this.relPath + "imgs/ic_menu_white_36px.svg";
  public searchIconPath:string = this.relPath + "imgs/ic_zoom_in_white_36px.svg";

  //
  breadcrumbs:string[];

  constructor( private router:Router ) {
    this.breadcrumbs =  this.router.url.split('/');
  }

  menuClick() {
    
  }

}
