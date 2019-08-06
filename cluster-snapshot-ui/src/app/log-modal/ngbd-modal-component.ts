import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PodService} from "../pod-data-container/pod.service";

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './model-component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
      font-size: 12px;
    }

    .dark-modal .close {
      color: white;
    }

    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
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
    this.modalService.open(content, {size: "lg", windowClass: 'dark-modal'});
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
    this.modalService.open(longContent, {windowClass: "setScrollBehavior()"});
  }

  // getPod() {
  //   var pod = new PodService();
  //   pod.podName = 'DummyPod-from-modal';
  //   pod.namespace = 'kNameSpace';
  //   return pod;
  // }
}
