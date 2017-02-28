import { SidebarFoldService } from './../sidebar-fold.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';
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

  constructor( private router:Router, private sidebarFold:SidebarFoldService ) {
    this.breadcrumbs =  this.router.url.split('/');
  }

  menuClick() {
    this.sidebarFold._isFolded = true;
  }

  @Input() state;
  @Output() clicked = new EventEmitter<string>();
  
  onClicked() {
    this.state = !this.state;
    this.clicked.emit(this.state);
  }


}
