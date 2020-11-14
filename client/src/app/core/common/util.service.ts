import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public customSort(data: any[], sortBy: any[], sortField: string): any[] {
    const sortByObject = sortBy.reduce(
      (obj, item, index) => ({
        ...obj,
        [item]: index
      }), {})
    return data.sort((a, b) => sortByObject[a[sortField]] - sortByObject[b[sortField]])
  }

  public formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

}
