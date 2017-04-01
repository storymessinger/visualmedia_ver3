import { Directive, Input, Output } from '@angular/core';

@Directive({
  selector: '[profileImg]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'srcset',
    '[defaultProfile]':'defaultProfile'
  }
})
export class DefaultProfileDirective {

  @Input() src:string;
  @Input() defaultProfile:string;

  updateUrl() {
    this.src = this.defaultProfile;
  }

}

