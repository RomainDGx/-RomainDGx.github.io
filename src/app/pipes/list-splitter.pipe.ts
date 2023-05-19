import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSplitter'
})
export class ListSplitterPipe implements PipeTransform {

  transform<T>(list: T[], size: number): T[][] {
    const result: T[][] = [];

    for (let i = 0; i < list.length; i += size) {
      result.push(list.slice(i, i + size));
    }

    return result;
  }
}
