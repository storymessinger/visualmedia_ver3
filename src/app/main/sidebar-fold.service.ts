import { Injectable } from '@angular/core';

@Injectable()
export class SidebarFoldService {

  _isFolded:boolean = false;

  constructor() { }

  get isFolded(){
    console.log('get: ' + this._isFolded);
    return this._isFolded;
  }
  set isFolded(input){
    console.log('set: ' + this._isFolded);
    this._isFolded = input;
  }


}
