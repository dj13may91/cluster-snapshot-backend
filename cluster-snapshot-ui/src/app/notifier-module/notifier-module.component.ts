import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-notifier-module',
  templateUrl: './notifier-module.component.html',
  styleUrls: ['./notifier-module.component.scss']
})
export class NotifierModuleComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  @Input() public successMessage: string;

  ngOnInit(): void {
    this.changeSuccessMessage('loaded');
    // setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => this.successMessage = null);
  }

  changeSuccessMessage(message = new Date().toDateString()) {
    this._success.next(message + ' - Message successfully changed.');
  }

}
