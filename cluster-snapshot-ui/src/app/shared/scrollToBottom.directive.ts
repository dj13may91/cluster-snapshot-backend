import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[scrollToBottom]',
  exportAs: 'scrollToBottom'
})
export class ScrollToBottomDirective {
  // @HostBinding('document') document;

  @HostListener('change') scroll() {
    console.log('scroll called');
    document.getElementById('logModal').scrollTop = 0;
  }

}
