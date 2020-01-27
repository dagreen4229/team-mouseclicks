//This Pipe filter is used to convert input strings into filterable commands for the client database.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string, prop: string): any[] {
    if (!items) return [];
    if (!value) return items;
    return items.filter(singleItem =>
      singleItem[prop].tolowerCase().startWith(value.toLowerCase())
      );
  }

}
