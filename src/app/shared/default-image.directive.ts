import { Directive, Input, Output } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[srcset]':'srcset'
  }
})
export class DefaultImageDirective {

  @Input() srcset:string;
  @Input() default:string;

  updateUrl() {
    this.srcset = this.default;
  }

}
