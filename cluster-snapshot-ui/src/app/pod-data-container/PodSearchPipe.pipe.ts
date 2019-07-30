import {Pipe, PipeTransform} from '@angular/core';
import {PodService} from "./pod.service";

@Pipe({
  name: 'PodSearchPipe'
})
export class PodSearchPipePipe implements PipeTransform {

  transform(items: PodService[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    let arr = items.filter(it => {
      return it.podName.toLowerCase().includes(searchText);
    });
    return arr;
  }

}
