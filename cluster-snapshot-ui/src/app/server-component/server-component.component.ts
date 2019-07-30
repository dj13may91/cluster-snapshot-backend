import {AfterViewInit, Component, OnInit} from '@angular/core';
// @ts-ignore
// import io from "socket.io-client";
import * as io from 'socket.io-client';


@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.scss']
})
export class ServerComponentComponent implements OnInit, AfterViewInit {

  private socket: any;


  public ngOnInit() {
    this.socket = io("http://localhost:5000");
  }

  public ngAfterViewInit() {
  }

  public move(action: string) {
    this.socket.emit(action, (data) => { // args are sent in order to acknowledgement function
      console.log("res: " , data);
    })
    console.log(action);
  }


}
