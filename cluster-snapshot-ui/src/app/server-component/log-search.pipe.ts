import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'logSearch'
})
export class LogSearchPipe implements PipeTransform {

  transform(items: string[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    let arr = items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
    return arr;
  }

}
