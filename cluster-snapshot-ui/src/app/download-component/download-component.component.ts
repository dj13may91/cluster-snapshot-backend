import {Component, Input} from '@angular/core';
import {of} from 'rxjs';
import {PodService} from '../pod-data-container/pod.service';
import {ClusterServices} from '../cluster-services/ClusterServices';
import {ClusterCommand} from '../cluster-commands/cluster-command';
import {SnapshotService} from '../shared/snapshot.service';


@Component({
  selector: 'app-download-component',
  templateUrl: './download-component.component.html',
  styleUrls: ['./download-component.component.scss']
})
export class DownloadComponentComponent {

  constructor() {
  }

  @Input() component: PodService | ClusterServices | ClusterCommand | string;
  @Input() type: string;
  private name: string;
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };

  static [Symbol.match](x) { // (A)
    return x instanceof this;
  }

  getPodLogs(component: PodService) {
    this.name = component.namespace + '.' + component.podName;
    return '<b>' + SnapshotService.getPodToString(component) + '</b>\n\n' + component.logs;
  }

  getServiceLogs(component: ClusterServices) {
    this.name = component.namespace + '.' + component.name;
    return '<b>' + SnapshotService.getServiceString(component) + '</b>\n\n' + component.logs;
  }

  getClusterCommandLogs(component: ClusterCommand) {
    this.name = component.commandName;
    return '<b>' + component.commandValue + '</b>\n\n' + component.log;
  }

  validateUserData(component) {
    if (this.type.toLowerCase() === 'podservice') {
      return of(
        this.getPodLogs(component));
    } else if (this.type.toLowerCase() === 'clusterservices') {
      return of(this.getServiceLogs(component));
    } else if (this.type.toLowerCase() === 'clustercommand') {
      return of(this.getClusterCommandLogs(component));
    } else {
      this.name = 'logFile';
      return of(this.component);
    }
  }

  downloadTxtFormat() {
    this.validateUserData(this.component).subscribe((res) => {
      this.downloadByHtmlTag({
        fileName: this.name + '.txt',
        text: res + ''
      });
    });

  }

  downloadHtmlFormat() {
    this.validateUserData(this.component).subscribe((res) => {
      this.downloadByHtmlTag({
        fileName: this.name + '.html',
        text: '<pre>' + res + '</pre>'
      });
    });
  }


  private downloadByHtmlTag(arg: { fileName: string, text: string }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.html') > -1 ? 'application/pdf' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-16,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);
    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }

}
