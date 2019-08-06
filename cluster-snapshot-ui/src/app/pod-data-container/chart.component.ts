//https://www.tutorialspoint.com/angular_googlecharts/angular_googlecharts_environment_setup.html

import {Component, Input} from '@angular/core';
import {SnapshotService} from "../shared/snapshot.service";

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html'
})
export class ChartComponent {
  title = 'Pod status';
  type = 'PieChart';
  @Input() data;
  columnNames = ['Status', 'Count'];
  options = {
    is3D: true,
    slices: {
      0: {offset: 0.1, color: 'green'},
      1: {offset: 0.1, color: 'orange'},
      2: {offset: 0.2, color: 'red'}
    }
  };
  width = 320;
  // height = 400;

  constructor(private snapshot: SnapshotService){
    this.data = snapshot.podStatusChart;
    window.setInterval(() => {
      this.data = snapshot.podStatusChart;
    }, 2000);
  }
}
