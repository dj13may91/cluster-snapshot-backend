import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BackendClientComponent} from "../backend-client/backend-client.component";
import {ClusterCommand} from "./cluster-command";
import {HttpErrorResponse} from "@angular/common/http";
import {SnapshotService} from "../snapshot.service";

@Component({
  selector: 'app-cluster-commands',
  templateUrl: './cluster-commands.component.html',
  styleUrls: ['./cluster-commands.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ClusterCommandsComponent implements OnInit {

  public clusterCommandList: ClusterCommand[];
  public searchText: string;

  constructor(public backend: BackendClientComponent, public snapshot: SnapshotService) {
    if (this.snapshot.clusterCommandList) {
      console.log("found old cluster commands")
      this.clusterCommandList = this.snapshot.clusterCommandList;
    } else {
      this.backend.getClusterCommands().subscribe(
        (clusterCommandList: ClusterCommand[]) => {
          console.log(clusterCommandList);
          this.clusterCommandList = this.sortArray(clusterCommandList);
          this.snapshot.clusterCommandList = clusterCommandList;
          this.getClusterCommandLogs();
        },
        (error) => console.error(error)
      )
    }
  }

  ngOnInit() {
  }

  getClusterCommandLogs() {
    for (let command of this.clusterCommandList) {
      if (!command.log) {
        this.getLogsOfCommand(command);
      }
    }
  }

  getLogsOfCommand(command: ClusterCommand) {
    const index = this.clusterCommandList.indexOf(command);
    this.clusterCommandList[index].log = 'Fetching new logs....';
    this.backend.getCommandOutput(command.commandValue).subscribe(
      (response: string) => this.clusterCommandList[index].log = response,
      (error: HttpErrorResponse) => command.log = error.message);
  }

  refreshLogs(command: ClusterCommand) {
    const index = this.clusterCommandList.indexOf(command);
    this.clusterCommandList[index].log = 'Refreshing logs....';
    this.backend.refreshClusterCommandLogs(command.commandValue).subscribe(
      (response: string) => this.clusterCommandList[index].log = response,
      (error: HttpErrorResponse) => command.log = error.message);
  }

  private sortArray(arr: ClusterCommand[]) {
    return arr.sort((a: ClusterCommand, b: ClusterCommand) => {
      if (a.commandValue > b.commandValue) return 1;
      else return -1;
    });
  }
}
