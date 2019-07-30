import {Pipe, PipeTransform} from '@angular/core';
import {ClusterCommand} from "./cluster-command";

@Pipe({
  name: 'clusterSearch'
})
export class ClusterSearchPipe implements PipeTransform {

  transform(items: ClusterCommand[], searchText: string): any {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    let arr = items.filter(it => {
      return it.commandValue.toLowerCase().includes(searchText);
    });
    return arr;
  }

}
