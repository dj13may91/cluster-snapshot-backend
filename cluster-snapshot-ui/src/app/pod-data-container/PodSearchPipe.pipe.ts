import {Pipe, PipeTransform} from '@angular/core';
import {PodService} from "./pod.service";

@Pipe({
  name: 'PodSearchPipe'
})
export class PodSearchPipePipe implements PipeTransform {

  transform(items: PodService[], searchText: string, namespace: string, status: string): PodService[] {
    if (!items) return [];
    let arr = items;

    if (namespace != 'all') {
      arr = arr.filter(pod => {
        return pod.namespace === namespace;
      });
    }

    if (searchText) {
      searchText = searchText.toLowerCase();
      arr = arr.filter(pod => {
        return pod.podName.toLowerCase().includes(searchText);
      });
    }

    if (status != 'all') {
      if (status === 'Deleted') {
        arr = arr.filter(pod => {
          return pod.deleted;
        });
      } else if (status === 'Running') {
        arr = arr.filter(pod => {
          return PodSearchPipePipe.isReady(pod);
        });
      } else if (status === 'Restarting') {
        arr = arr.filter(pod => {
          return !PodSearchPipePipe.isReady(pod);
        });
      }
    }
    return arr;
  }

  static isReady(pod: PodService): boolean {
    const split = pod.ready.split("/");
    return split[0] === split[1];
  }

}
