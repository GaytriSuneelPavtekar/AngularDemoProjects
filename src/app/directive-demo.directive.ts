import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveDemo]'
})
export class DirectiveDemoDirective {

  constructor(private ele:ElementRef) { }

}
