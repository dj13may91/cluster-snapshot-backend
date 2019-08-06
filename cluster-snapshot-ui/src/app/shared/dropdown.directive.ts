import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;


  @HostListener('click') click() {
    this.isOpen = true;
  }

  @HostListener('mouseover') over() {
    this.isOpen = true;
  }

  @HostListener('mouseout') out() {
    this.isOpen = false
  }
}
