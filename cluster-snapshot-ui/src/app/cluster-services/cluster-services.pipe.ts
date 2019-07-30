import {Pipe, PipeTransform} from '@angular/core';
import {ClusterServices} from "./ClusterServices";

@Pipe({
  name: 'clusterServices'
})
export class ClusterServicesPipe implements PipeTransform {

  transform(items: ClusterServices[], searchText: string): any {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    let arr = items.filter(it => {
      return it.serviceCommand.toLowerCase().includes(searchText);
    });
    return arr;
  }

}
