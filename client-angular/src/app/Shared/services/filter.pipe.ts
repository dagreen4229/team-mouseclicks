//This Pipe filter is used to convert input strings into filterable commands for the client database.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string, prop: string): any[] {
    console.log('transform initiated!', items, value)
    
    if (!items) {
      console.log("No Items to filter")
      return []; 
    }

    if (!value) {
      console.log("No values")
      return items;
    }

    return items.filter(singleItem =>
      singleItem[prop].tolowerCase().startWith(value.toLowerCase())

      );
    console.log('transform complete!')
  }

}
