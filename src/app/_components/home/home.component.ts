import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../_services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myObj: object = {};
  constructor(public utilS: UtilService) { }

  ngOnInit() {
  	this.utilS.myVal;
  	this.utilS.myFunc();
  	this.utilS.myFunc(1);
  	this.utilS.myFunc('1');
  }

}
