import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  data: any;

  constructor() {}

  setdataUserPdf(data: any) {
    localStorage.setItem('dataUser',JSON.stringify(data));
  }

  getdataUserPdfReturn(){
    return localStorage.getItem('dataUser');
  }
}
