import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args.length == 2) {
      const searchText = args[0];
      const key = args[1];
      if (!searchText) {
        return value;
      }
      return value.filter((val) => {
        if (val && val[key] && typeof val[key] === 'string' && val[key].toLowerCase().includes(searchText)) {
          return val;
        }
      });
    } else if (args.length == 3) {
      const searchText = args[0];
      const key = args[1];
      const key2 = args[2];
      if (!searchText) {
        return value;
      }
      return value.filter((val) => {
        if (val && val[key] && typeof val[key] === 'string' && val[key].toLowerCase().includes(searchText)) {
          return val;
        }
        if (val && val[key2] && typeof val[key2] === 'string' && val[key2].toLowerCase().includes(searchText)) {
          return val;
        }
      });
    } else {
      return value;
    }
  }
}
