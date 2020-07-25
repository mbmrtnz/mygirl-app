import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  myVal: string = "";

  myFunc(str?) {
  	console.log(str);
  }
}
