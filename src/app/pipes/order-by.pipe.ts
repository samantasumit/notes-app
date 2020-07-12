import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if (!value || value.length == 0) {
      return [];
    }
    const key = args;
    value.sort((a: any, b: any): any => {
      const date1 = new Date(a[key]);
      const date2 = new Date(b[key]);
      if (date2 > date1) {
        return 1;
      } else if (date2 < date1) {
        return -1;
      } else {
        return 0;
      }

    });
    return value;
  }

}
