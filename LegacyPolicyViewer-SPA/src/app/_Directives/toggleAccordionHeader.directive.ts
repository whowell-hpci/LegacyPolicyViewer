import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleAccordionHeader]'
})
export class ToggleAccordionHeaderDirective {
  @HostBinding('heading') heading:string='Click To Expand'
  @HostListener('click') onClick() {
    this.heading='Collapse Documents';
  }
  constructor() {}
}

  




