import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PodService} from '../pod-data-container/pod.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-options',
  templateUrl: './model-component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-component.css']
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalOptions {
  closeResult: string;

  @Input() podModal: PodService;

  constructor(private modalService: NgbModal) {
    // this.podModal = this.getPod();
  }

  openSocket(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'dark-modal'});
  }

  openSm(content) {
    this.modalService.open(content, {size: 'sm'});
  }

  openLg(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  openXl(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, {centered: true});
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, {windowClass: 'setScrollBehavior()'});
  }
}
